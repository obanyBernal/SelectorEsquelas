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
    "Así que no temas, porque yo estoy contigo; no te angusties, porque yo soy tu Dios. Te fortaleceré y te ayudaré; te sostendré con mi diestra victoriosa. Isaías 41:10",
  "Aunque pase por el valle de sombra de muerte, no temeré mal alguno, porque tú estás conmigo: tu vara y tu cayado me infunden aliento. Salmos 23:4",
  "Dios es nuestro amparo y nuestra fortaleza, nuestra ayuda segura en momentos de angustia. Salmo 46:1",
  "He peleado la buena batalla, he terminado la carrera, he guardado la fe, ahora me toca recibir la corona merecida que Dios que es justo me dará. 2ª Timoteo 4:7",
  "Porque para mí el vivir es Cristo y el morir es ganancia. Filipenses 1:21",
  "Así también ustedes ahora sienten tristeza, pero yo los volveré a ver y su corazón se llenará de alegría, y nadie les podrá arrebatar ese gozo. Juan 16:22",
  "Este es nuestro Dios, ahora y para siempre. El Dios nuestro nos guiará más allá de la muerte. Salmo 48:14",
  "En cada pensamiento y en cada silencio, tu recuerdo vive con nosotros siempre.",
  "Nos queda tu risa, tus abrazos y todo lo que fuiste… porque aunque te hayas ido, sigues siendo parte de nosotros.",
  "Tu partida deja un vacío inmenso, pero tu amor y recuerdos vivirán por siempre en nuestros corazones.",
  "Dejas un legado de amor y fortaleza que nunca olvidaremos.",
  "Gracias por darnos tanto amor en tan poco tiempo. Tu luz es eterna, y tu recuerdo, nuestro mayor tesoro.",
  "Te fuiste sin avisar, dejando un silencio que duele… pero también un amor que jamás se irá.",
  "Fuiste un regalo de amor que la vida nos dio por un momento, y que el cielo abrazó para siempre.",
  "Tu luz fue breve, pero iluminó nuestras almas para siempre. Gracias por habernos elegido.",
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
      <p>
        A continuación te presentamos una lista de pensamientos que la Unidad de
        Duelo y Acompañamiento ha preparado,
      </p>
      <p>Da clic sobre el que más te guste para poder leerlo</p>
      <div className="pensamientos-list">
        {pensamientos.map((texto, index) => (
          <div
            key={index}
            className="pensamiento-card"
            onClick={() => setSelected(texto)}
          >
            <p>
              <strong>{index + 1}.</strong> {texto.slice(0, 100)}...
            </p>
          </div>
        ))}
      </div>

      {selected && (
        <div className="pensamiento-modal" onClick={() => setSelected(null)}>
          <div
            className="pensamiento-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>
              <strong>Pensamiento {pensamientos.indexOf(selected) + 1}:</strong>{" "}
              {selected}
            </h3>
            <div className="modal-buttons">
              <button onClick={handleCopy}>Copiar pensamiento</button>
              <button onClick={() => setSelected(null)}>Cerrar</button>
            </div>
            <h2>
              Da clic en copiar pensamiento y pegalo en el chat de WhatsApp de
              tu asesor para compartir el pensamiento que has seleccionado.
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default SelectorPensamientos;
