import { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import Calendario from "./Calendario.jsx";
import Musica from "./Musica.jsx";
import Hora from "./Hora.jsx";
import "../style/Contenido.css";
import "../style/SideBar.css";

export default function Contenido() {
  const [visible, setVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [textCompleted, setTextCompleted] = useState(false);

  // 👇 añadimos vestimenta
  const [visibleSections, setVisibleSections] = useState({
    musica:false,
    calendario: false,
    hora: false,
    botones: false,
    vestimenta: false,
  });

  const fullText =
    "Con mucha ilusión, [Nombre mamá] y [Nombre papá] te invitan a su revelación de género.";

  // efecto escritura
  useEffect(() => {
    let i = 0;
    const typeWriter = () => {
      if (i < fullText.length) {
        setDisplayedText(fullText.substring(0, i + 1));
        i++;
        setTimeout(typeWriter, 80); // velocidad
      } else {
        setTextCompleted(true);
        setTimeout(() => {
          setShowCursor(false);
        }, 1000);
      }
    };

    const timer = setTimeout(typeWriter, 1000);
    return () => clearTimeout(timer);
  }, [fullText]);

  // 👇 mostramos secciones con delay
  useEffect(() => {
    if (textCompleted) {
      setTimeout(() => {
        setVisibleSections((prev) => ({ ...prev, musica: true }));
      }, 500);

      setTimeout(() => {
        setVisibleSections((prev) => ({ ...prev, calendario: true }));
      }, 1500);

      setTimeout(() => {
        setVisibleSections((prev) => ({ ...prev, hora: true }));
      }, 2500);

      setTimeout(() => {
        setVisibleSections((prev) => ({ ...prev, botones: true }));
      }, 3500);

      setTimeout(() => {
        setVisibleSections((prev) => ({ ...prev, vestimenta: true }));
      }, 4500);
    }
  }, [textCompleted]);

  return (
    <div className="container_texto_invitacion">
      <div className="nombre mt-5">
        <h1 className="">Niño</h1>
        <h1 className="ml-5 mt-5">o</h1>
        <h1 className="ml-5">Niña</h1>
      </div>

      <div className="subtitulo">
        <p className={`cursor ${showCursor ? "blinking-cursor" : ""}`}>
          {displayedText}
        </p>
      </div>

      <section className={`container_musica mt-5 slide-up-section ${
          visibleSections.musica ? "visible" : ""
        }`}>
        <Musica />
      </section>

      {/* Calendario */}
      <section
        className={`calendario mt-5 slide-up-section ${
          visibleSections.calendario ? "visible" : ""
        }`}
      >
        <div className="img_text">
          <img
            src="https://res.cloudinary.com/dnao6nouz/image/upload/v1757956883/image_23_yhkwqv.png"
            alt=""
          />
          <div className="text_img">
            <h2>Reserva este día</h2>
          </div>
        </div>
        <Calendario />
      </section>

      {/* Hora */}
      <section
        className={`Hora mb-5 slide-up-section ${
          visibleSections.hora ? "visible" : ""
        }`}
      >
        <div className="img_text">
          <img
            src="https://res.cloudinary.com/dnao6nouz/image/upload/v1757956883/image_23_yhkwqv.png"
            alt=""
          />
          <div className="text_img">
            <h2>¡Tan solo faltan!</h2>
          </div>
        </div>
        <Hora />
      </section>

      {/* Botones */}
      <section
        className={`container_butons mt-5 slide-up-section ${
          visibleSections.botones ? "visible" : ""
        }`}
      >
        {/* Botón Dirección */}
        <div className="buton_direccion flex">
          <i className="pi pi-map-marker"></i>
          <a href="https://maps.app.goo.gl/8JVW2B5yPjbhDADKA" target="_blank">
            <Button label="Ver Dirección">
              <span className="animado_square"></span>
              <span className="animado_square"></span>
              <span className="animado_square"></span>
              <span className="animado_square"></span>
            </Button>
          </a>
        </div>

        {/* Botón WhatsApp */}
        <div className="buton_whatsapp flex mt-4">
          <i className="pi pi-whatsapp"></i>
          <a
            href="https://wa.me/51950874416?text=Hola%20quiero%20confirmar%20mi%20asistencia%20a%20tu%20fiesta."
            target="_blank"
          >
            <Button label="Confirmar">
              <span className="animado_square"></span>
              <span className="animado_square"></span>
              <span className="animado_square"></span>
              <span className="animado_square"></span>
            </Button>
          </a>
        </div>

        {/* Botón Lista de Regalos */}
        <div className="buton_lista_regalos mt-4 flex">
          <i className="pi pi-gift"></i>
          <Button label="Lista de Regalos" onClick={() => setVisible(true)}>
            <span className="animado_square"></span>
            <span className="animado_square"></span>
            <span className="animado_square"></span>
            <span className="animado_square"></span>
          </Button>
          <Sidebar
            className="sidebar_regalos"
            visible={visible}
            onHide={() => setVisible(false)}
          >
            <h2>Lista de Regalos</h2>
            {/* ... tu lista de regalos ... */}
          </Sidebar>
        </div>
      </section>

      {/* Código de vestimenta */}
      <section
        className={`codigo_vestimenta slide-up-section ${
          visibleSections.vestimenta ? "visible" : ""
        }`}
      >
        <div className="img_text">
          <img
            src="https://res.cloudinary.com/dnao6nouz/image/upload/v1757956883/image_23_yhkwqv.png"
            alt=""
          />
          <div className="text_img">
            <h2>Código de Vestimenta</h2>
          </div>
        </div>
        <p>
          Ven vestido de azul si crees que será niño 💙 o de rosa si crees que
          será niña 💖
        </p>
      </section>
    </div>
  );
}
