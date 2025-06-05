import React, { useState } from "react";
import "../css/SelectorPensamientos.css";

const pensamientos = [
  "El cielo se iluminó por la llegada de este hermoso Ángel, siempre guardaremos los mejores recuerdos…. Te extrañaremos.",
  "Cuando la vida te separa de un ser querido el recuerdo de su sonrisa es la mejor manera de seguir adelante.",
  "Para los que amé y para los que me amaron:\nQue su tristeza se convierta en confianza y fe.\nEs solo por un momento que vamos a estar separados.\nAsí que bendigan los recuerdos de su corazón.",
  "Como los rayos del sol iluminan el mundo entero, tus recuerdos iluminarán nuestros corazones y nuestra mente por el resto de nuestros días.",
  "Tu ausencia ha dejado un inmenso vacío, pero para los que te amamos, no dejarás de existir jamás.",
  "Este es el mensaje que oímos de él y os anunciamos: Que Dios es Luz, y que en él no hay tiniebla alguna. 1 Juan 1:25",
  "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te fortalezco; siempre te ayudaré; siempre te sustentaré con la diestra de mi justicia. Isaías 41:10",
  "Aunque pase por quebradas oscuras, no temo ningún mal, porque tú estás conmigo con tu vara y tu bastón, y al verlas voy sin miedo. Salmo 23:4",
  "Le dijo Jesús: Yo soy la resurrección y la vida; el que cree en mí, aunque esté muerto, vivirá. Y todo aquel que vive y cree en mí, no morirá eternamente. ¿Crees esto? Juan 11:25-26",
  "Si el hombre muere, ¿Puede volver a vivir? Esperaré todos los días de mi servicio obligatorio hasta que llegue mi liberación. Tú llamarás y yo responderé. Job 14:14-15",
];

function SelectorPensamientos() {
  const [selected, setSelected] = useState(null);
  const handleCopy = () => {
    navigator.clipboard.writeText(selected);
    alert("Pensamiento copiado al portapapeles ✅");
  };
  return (
    <div className="pensamientos-wrapper">
      <h1>Selector de Pensamientos</h1>
      <div className="pensamientos-list">
        {pensamientos.map((texto, index) => (
          <div
            key={index}
            className="pensamiento-card"
            onClick={() => setSelected(texto)}
          >
            <p><strong>{index + 1}.</strong> {texto.slice(0, 100)}...</p>
          </div>
        ))}
      </div>

      {selected && (
        <div className="pensamiento-modal" onClick={() => setSelected(null)}>
          <div
            className="pensamiento-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <p><strong>Pensamiento {pensamientos.indexOf(selected) + 1}:</strong> {selected}</p>
            <div className="modal-buttons">
              <button onClick={handleCopy}>Copiar pensamiento</button>
              <button onClick={() => setSelected(null)}>Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SelectorPensamientos;
