import EnviarMensajes from "../islands/EnviarMensajes.tsx";
import MostrarContactos from "../islands/MostrarContactos.tsx";
import MostrarMensajes from "../islands/MostrarMensajes.tsx";

export default function Home() {
  return (
    <div class="Layout">
      <div class="sidebar">
        <a href="/contactos">
          <button>Crear contacto</button>
        </a>
        <MostrarContactos />
      </div>
      <div class="chat">
        <MostrarMensajes />
        <EnviarMensajes />
      </div>
    </div>
  );
}
