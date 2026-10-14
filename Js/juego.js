document.addEventListener("DOMContentLoaded", function () {
 const preguntas = [
    {
      texto: "¿Cuál de los siguientes es un sistema operativo?",
      opciones: [
        { texto: "A) Linux", correcta: true },
        { texto: "B) Microsoft Word", correcta: false },
        { texto: "C) Google Chrome", correcta: false },
        { texto: "D) Photoshop", correcta: false }
      ]
    },
    {
      texto: "¿Cuál de estos es un periférico de entrada?",
      opciones: [
        { texto: "A) Monitor", correcta: false },
        { texto: "B) Teclado", correcta: true },
        { texto: "C) Parlante", correcta: false },
        { texto: "D) Impresora", correcta: false }
      ]
    },
    {
      texto: "¿Cuál es un lenguaje de programación?",
      opciones: [
        { texto: "A) Python", correcta: true },
        { texto: "B) HTTP", correcta: false },
        { texto: "C) Excel", correcta: false },
        { texto: "D) Wi-Fi", correcta: false }
      ]
    },
    {
      texto: "¿Qué componente almacena datos de forma permanente?",
      opciones: [
        { texto: "A) Memoria RAM", correcta: false },
        { texto: "B) Procesador", correcta: false },
        { texto: "C) Disco duro / SSD", correcta: true },
        { texto: "D) Placa de video", correcta: false }
      ]
    },
    {
      texto: "¿Cuál de estas extensiones corresponde a una imagen?",
      opciones: [
        { texto: "A) .exe", correcta: false },
        { texto: "B) .jpg", correcta: true },
        { texto: "C) .mp3", correcta: false },
        { texto: "D) .docx", correcta: false }
      ]
    },
    {
      texto: "¿Cuál de estos programas es un navegador web?",
      opciones: [
        { texto: "A) Mozilla Firefox", correcta: true },
        { texto: "B) Microsoft Excel", correcta: false },
        { texto: "C) VLC", correcta: false },
        { texto: "D) WinRAR", correcta: false }
      ]
    },
    {
      texto: "¿Cuál es un servicio de almacenamiento en la nube?",
      opciones: [
        { texto: "A) Paint", correcta: false },
        { texto: "B) Bloc de notas", correcta: false },
        { texto: "C) Google Drive", correcta: true },
        { texto: "D) Calculadora", correcta: false }
      ]
    },
    {
      texto: "¿Qué acción ayuda a proteger una cuenta?",
      opciones: [
        { texto: "A) Usar una contraseña segura", correcta: true },
        { texto: "B) Compartir la contraseña con amigos", correcta: false },
        { texto: "C) Usar la misma clave en todos lados", correcta: false },
        { texto: "D) Anotar la clave en un papel público", correcta: false }
      ]
    },
    {
      texto: "¿Cuál de estos forma parte del hardware?",
      opciones: [
        { texto: "A) Windows", correcta: false },
        { texto: "B) Procesador", correcta: true },
        { texto: "C) Google Chrome", correcta: false },
        { texto: "D) Python", correcta: false }
      ]
    },
    {
      texto: "¿Cuál de estos es un protocolo de red?",
      opciones: [
        { texto: "A) USB", correcta: false },
        { texto: "B) HDMI", correcta: false },
        { texto: "C) HTTP", correcta: true },
        { texto: "D) PDF", correcta: false }
      ]
    },
    {
      texto: "¿Cuál unidad mide capacidad de almacenamiento?",
      opciones: [
        { texto: "A) Kilómetro", correcta: false },
        { texto: "B) Gigabyte", correcta: true },
        { texto: "C) Kilogramo", correcta: false },
        { texto: "D) Litro", correcta: false }
      ]
    },
    {
      texto: "¿Qué programa pertenece a una suite de oficina?",
      opciones: [
        { texto: "A) Procesador de textos", correcta: true },
        { texto: "B) Reproductor de video", correcta: false },
        { texto: "C) Juego de PC", correcta: false },
        { texto: "D) Antivirus", correcta: false }
      ]
    },
    {
      texto: "¿Cuál es un ejemplo de software malicioso?",
      opciones: [
        { texto: "A) Antivirus", correcta: false },
        { texto: "B) Virus", correcta: true },
        { texto: "C) Navegador", correcta: false },
        { texto: "D) Sistema operativo", correcta: false }
      ]
    },
    {
      texto: "¿Qué se necesita para conectarse a un Wi-Fi protegido?",
      opciones: [
        { texto: "A) Solo una impresora", correcta: false },
        { texto: "B) La contraseña correcta", correcta: true },
        { texto: "C) Un cable HDMI", correcta: false },
        { texto: "D) Un CD de instalación", correcta: false }
      ]
    },
    {
      texto: "¿Qué característica corresponde a la memoria RAM?",
      opciones: [
        { texto: "A) Almacena datos de forma permanente", correcta: false },
        { texto: "B) Pierde su contenido al apagar el equipo", correcta: true },
        { texto: "C) Imprime documentos", correcta: false },
        { texto: "D) Conecta a Internet sola", correcta: false }
      ]
    },
    {
      texto: "¿Cuál es un motor de búsqueda en Internet?",
      opciones: [
        { texto: "A) WhatsApp", correcta: false },
        { texto: "B) Google", correcta: true },
        { texto: "C) Instagram", correcta: false },
        { texto: "D) Spotify", correcta: false }
      ]
    },
    {
      texto: "¿Qué práctica ayuda a evitar el phishing?",
      opciones: [
        { texto: "A) Revisar la dirección del remitente", correcta: true },
        { texto: "B) Entregar contraseñas por correo", correcta: false },
        { texto: "C) Abrir cualquier enlace sospechoso", correcta: false },
        { texto: "D) Ignorar errores de ortografía raros", correcta: false }
      ]
    },
    {
      texto: "¿Cuál sistema de numeración se usa en informática?",
      opciones: [
        { texto: "A) Romano", correcta: false },
        { texto: "B) Binario", correcta: true },
        { texto: "C) Egipcio", correcta: false },
        { texto: "D) Mayas antiguos", correcta: false }
      ]
    },
    {
      texto: "¿Qué hace la CPU?",
      opciones: [
        { texto: "A) Ejecuta instrucciones y procesa datos", correcta: true },
        { texto: "B) Imprime documentos en papel", correcta: false },
        { texto: "C) Solo guarda fotos", correcta: false },
        { texto: "D) Solo conecta el mouse", correcta: false }
      ]
    },
    {
      texto: "¿Qué se usa para crear una red local cableada?",
      opciones: [
        { texto: "A) Cables Ethernet", correcta: true },
        { texto: "B) Un teclado", correcta: false },
        { texto: "C) Un parlante", correcta: false },
        { texto: "D) Un monitor solo", correcta: false }
      ]
    }
  ];

  let indice = 0;
  let correctas = 0;
  let respondioBien = false;

  const btnComenzar = document.getElementById("btnComenzar");
  const pantallaInicio = document.getElementById("inicio");
  const pantallaPregunta = document.getElementById("pregunta");
  const numeroPregunta = document.getElementById("numeroPregunta");
  const textoPregunta = document.getElementById("textoPregunta");
  const contenedorOpciones = document.getElementById("opciones");
  const mensaje = document.getElementById("mensaje");
  const btnSiguiente = document.getElementById("btnSiguiente");
 
const feedbackImagen = document.getElementById("feedbackImagen");
const imgFeedback = document.getElementById("imgFeedback");

const audioCorrecto = new Audio("sonidos/correcto.mp4");
const audioIncorrecto = new Audio("sonidos/incorrecto.mp4");
  function calcularNota(cantidadCorrectas) {
    return (cantidadCorrectas * 0.5).toFixed(1);
  }

  function mostrarPregunta() {
    const p = preguntas[indice];
    respondioBien = false;

    numeroPregunta.textContent = "Pregunta " + (indice + 1) + " de " + preguntas.length;
    textoPregunta.textContent = p.texto;
    mensaje.textContent = "";
    btnSiguiente.style.display = "none";

    // ↓↓↓ ACÁ: ocultar la imagen
    feedbackImagen.style.display = "none";
    imgFeedback.src = "";

    contenedorOpciones.innerHTML = "";

    // después sigue el forEach que crea los botones...
 
  

    p.opciones.forEach(function (op) {
      const boton = document.createElement("button");
      boton.className = "opcion";
      boton.textContent = op.texto;

      boton.addEventListener("click", function () {
        if (boton.disabled) return;

        const todos = contenedorOpciones.querySelectorAll(".opcion");
        todos.forEach(function (b) {
          b.disabled = true;
        });

        if (op.correcta) {
          boton.classList.add("correcta");
          mensaje.textContent = "¡Respuesta Correcta!";
          mensaje.style.color = "#2ecc71";
          respondioBien = true;

          imgFeedback.src = "Imagenes/mancuello-ok.png";
          feedbackImagen.style.display = "block";
          console.log("Imagen correcta:", imgFeedback.src);

          if (audioCorrecto) {
            audioCorrecto.currentTime = 0;
            audioCorrecto.play();
          }
        } else {
          boton.classList.add("incorrecta");
          respondioBien = false;

          const opcionCorrecta = p.opciones.find(function (o) {
            return o.correcta === true;
          });

          todos.forEach(function (b) {
            if (b.textContent === opcionCorrecta.texto) {
              b.classList.add("respuesta-real");
            }
          });

          mensaje.textContent = "La respuesta correcta era: " + opcionCorrecta.texto;
          mensaje.style.color = "#f1c40f";

          imgFeedback.src = "Imagenes/mancuello-incorrecto.png";
          feedbackImagen.style.display = "block";
          console.log("Imagen incorrecta:", imgFeedback.src);

          if (audioIncorrecto) {
            audioIncorrecto.currentTime = 0;
            audioIncorrecto.play();
          }
        }

        btnSiguiente.style.display = "inline-block";
      });

      contenedorOpciones.appendChild(boton);
    });
  }

  function mostrarResultado() {
    const nota = calcularNota(correctas);
    const total = preguntas.length;

    numeroPregunta.textContent = "Resultado final";
    textoPregunta.textContent = "¡Fin del desafío!";
    contenedorOpciones.innerHTML = "";

    mensaje.innerHTML =
      "Respuestas correctas: <strong>" + correctas + " de " + total + "</strong><br>" +
      "Tu nota: <strong style='font-size: 36px;'>" + nota + "</strong>";
    mensaje.style.color = "#ffffff";

    btnSiguiente.textContent = "Volver al inicio";
    btnSiguiente.style.display = "inline-block";

    btnSiguiente.onclick = function () {
      correctas = 0;
      indice = 0;
      pantallaPregunta.style.display = "none";
      pantallaInicio.style.display = "";
      btnSiguiente.textContent = "Siguiente";
      btnSiguiente.onclick = null;
      btnSiguiente.addEventListener("click", alSiguiente);
    };
  }

  function alSiguiente() {
    if (respondioBien) {
      correctas++;
    }

    indice++;

    if (indice < preguntas.length) {
      mostrarPregunta();
    } else {
      mostrarResultado();
    }
  }

  btnComenzar.addEventListener("click", function () {
    correctas = 0;
    indice = 0;
    pantallaInicio.style.display = "none";
    pantallaPregunta.style.display = "flex";
    mostrarPregunta();
  });

  btnSiguiente.addEventListener("click", alSiguiente);
});


        
