import { useEffect, useState } from "preact/hooks";
import { FunctionalComponent } from "preact";
import { chatSeleccionado, enviar } from "../static/signals.ts";
import { useSignalEffect } from "@preact/signals";
type Data={
    _id:string;
    name:string;
    email:string;
    phone:string;
    chatId:string;
    createdAt:string;
    updatedAt:string;
    __v:number;
}
type Contacto ={
    count:number;
    data:Data[];

};
const MostrarContactos: FunctionalComponent = () => {
    const [contactos, setContactos] = useState<Contacto|null>(null);

    const GetContactos = async () => {
        try {
            const respuesta = await fetch(`https://back-a-p4.onrender.com/contacts`, {
                method: "GET",
                headers: {
                    "accept": "application/json",
                    "Content-Type": "application/json"
                }
            });
            const response = await respuesta.json();
            setContactos(response);
        } catch (e) {
            console.error(e);
        }
    };
useEffect(() => {
        GetContactos();
    }, []);

 useSignalEffect(() => {
        if (enviar.value==true) {
            GetContactos();
            enviar.value = false; 
        }
    });
    return(
        <div>
             <ul class="BotonesSidebar">
                {contactos?.data.map((contacto) => (
                    <li key={contacto._id}>
                        <button onClick={()=>chatSeleccionado.value=contacto.chatId}>
                            <p>{contacto.name}</p>
                            <p>{contacto.phone}</p>
                        </button>
                        
                    </li>
                ))}
            </ul>
        </div>
        
    );
};
export default MostrarContactos;