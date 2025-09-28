import { FunctionalComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import { chatSeleccionado, enviarMensaje } from "../static/signals.ts";
/*entrada
{
  "chatId": "6832ec001bbeb71ef4740e62",
  "isContactMessage": true, deberia ser true cada vez que se mande
  "content": "¡Hola! ¿Cómo estás? p",
  "timestamp": "2025-05-18T10:30:00.000Z"
}
*/ 
type Data = {
    chatId: string;
    isContactMessage: boolean;
    content: string;
    timestamp: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
};

type Message = {
    message: string;
    data:Data[];
};

const EnviarMensajes: FunctionalComponent = () => {
    const [message, setMessage] = useState<string>("");
      
    const EnviarMensaje =async() =>{
             const respuesta = await fetch(`https://back-a-p4.onrender.com/messages`, {
                method: "POST",
                headers: {
                "accept": "application/json",
                "Content-Type": "application/json"
            },
                body: JSON.stringify({
                    chatId: chatSeleccionado.value,
                    isContactMessage: true,
                    content: message,
                    timestamp: new Date()
                })
            }); 
            enviarMensaje.value=true;
            setMessage("");
        };
       

    return (
        <div class="footer">
            <input type="text" placeholder="Escribe tu mensaje" onInput={(e) =>setMessage(e.currentTarget.value)} value={message} />
            <button type="button" onClick={EnviarMensaje}>Enviar</button>
        </div>
    );
};

export default EnviarMensajes;