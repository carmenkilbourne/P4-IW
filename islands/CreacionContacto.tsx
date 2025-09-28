import { useEffect, useState } from "preact/hooks";
import { FunctionalComponent } from "preact";
import { enviar } from "../static/signals.ts";
const CreacionContacto:FunctionalComponent = () => { 
    const [nombre,setNombre]=useState<string>("");
    const [email,setEmail]=useState<string>("");
    const [telefono,setTelefono]=useState<string>("");

    const PonerContacto =async() =>{
        try{
            const respuesta = await fetch(`https://back-a-p4.onrender.com/contacts`, {
                method: "POST",
                headers: {
                "accept": "application/json",
                "Content-Type": "application/json"
            },
                body: JSON.stringify({
                    name: nombre,
                    email: email,
                    phone: telefono
                })
            });
            enviar.value=true;
            setNombre("");
            setEmail("");
            setTelefono("");           
        }
        catch(e){
            console.error(e);
        }
        
    };

    return(
        <div>
            <a href="/"><button>Volver</button></a>
            <div class ="Formulario">
                <input type="text" placeholder="nombre" onInput={(e) =>setNombre(e.currentTarget.value)} value={nombre}/>
                <input type="text" placeholder="email" onInput={(e) =>setEmail(e.currentTarget.value)} value={email}/>
                <input type="text" placeholder="telefono" onInput={(e) =>setTelefono(e.currentTarget.value)} value={telefono}/>
                <button type="button" onClick={PonerContacto}>Crear nuevo contacto</button>
                {enviar.value && <h1 class="MensajeCreadoUsuario">El usuario ha sido creado exitosamente</h1>}
            </div>
        </div>
    );
};
export default CreacionContacto;