import { signal } from '@preact/signals';

export const enviar = signal<boolean>(false); //señal para enviar el usuario seleccionado
export const chatSeleccionado = signal<string>(""); //señal para seleccionar el chat con el id del usuario
export const isContactMessage = signal<boolean>(false); //señal para que salga en lado derecho o izquierdo
export const enviarMensaje = signal<boolean>(false); //enviar mensaje y que se recarge el mostrar mensajes
 

