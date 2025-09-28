import { FunctionalComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import { chatSeleccionado, enviarMensaje } from "../static/signals.ts";

type Message = {
    _id: string;
    chatId: string;
    isContactMessage: boolean;
    content: string;
    timestamp: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
};

type Chat = {
    _id: string;
    messageIds: Message[];
};

const MostrarMensajes: FunctionalComponent = () => {
    const [chats, setChats] = useState<Chat|null>(null);
    const GetMensajes = async () => {
        try {
            const respuesta = await fetch(`https://back-a-p4.onrender.com/chats/${chatSeleccionado.value}`, {
                method: "GET",
                headers: {
                    "accept": "application/json",
                    "Content-Type": "application/json"
                }
            });
            const response = await respuesta.json();
            setChats(response);
        } catch (e) {
            console.error(e);
        }
    };
     useEffect(() => {
    if (chatSeleccionado.value) {
     GetMensajes();
     enviarMensaje.value=false;
    }
  }, [chatSeleccionado.value,enviarMensaje.value]);
    return (
        <div>
            <ul class="MostrarMensajess">
                {chats?.messageIds.map((message) => (
                    <li key={message._id} >
                        <p  class={message.isContactMessage ? "messageDrch" : "messageIzq"}>{message.content}</p>
                    </li>
                ))}
            </ul>
            
       </div>
    );
};

export default MostrarMensajes;