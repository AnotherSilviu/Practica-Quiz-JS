const questions = [
  {
    id: 1,
    question: "¿Quién es el más tonto de clase?",
    answers: ["Ricardo", "David", "Alejandro"],
    correctAnswer: "Ricardo",
  },
  {
    id: 2,
    question: "¿Qué personaje de ACNH odias más?",
    answers: ["Carmelo", "Tom Nook", "Canela"],
    correctAnswer: "Carmelo",
  },
  {
    id: 3,
    question: "¿Qué estación te gusta más?",
    answers: ["Primavera", "Verano", "Otoño", "Invierno"],
    correctAnswer: "Invierno",
  },
  {
    id: 4,
    question: "¿Cuál es tu profesor favorito?",
    answers: ["Andrei", "Carlos", "Alicia", "Marisa"],
    correctAnswer: "Andrei",
  },
];

let currentQuestion = 0;

const title = document.getElementById("question");
const answerBox = document.getElementById("answerBox");
const progress = document.getElementById("questionProgress");

function printQuestion() {
  // Actualizar el progreso de la pregunta
  progress.innerText = `Pregunta 1 de ${questions.length}`;
  // Pintar el titulo de la pregunta
  title.innerText = questions[currentQuestion].question;

  // De la pregunta actual
  let questionAnswers = questions[currentQuestion].answers;

  // Desordena las respuestas para que no estén siempre en el mismo orden
  questionAnswers.sort(() => Math.random() - 0.5);

  // Antes de pintar las NUEVAS respuestas, se borra el contenido del div
  answerBox.innerHTML = "";

  // Se generan los botones de respuesta
  questionAnswers.forEach((answer, index) => {
    setTimeout(() => {
      answerBox.innerHTML += `<button
            id='btn${index}'	
            onclick="checkAnswer('${answer}')"
            class="bg-slate-200 rounded-lg p-2.5 hover:bg-slate-800 hover:text-white transition-all"
          >
            ${answer}
          </button>`;
    }, 2000 * (index + 1));
  });
}

function checkAnswer(answer) {
  const currentCorrectAnswer = questions[currentQuestion].correctAnswer;

    //if else en opretador ternario
    const bgColor = 
      answer == currentCorrectAnswer ? "bg-green-500" : "bg-red-500";

    //Aqui eliminamos el color gris y añadimos el color que toque segun respuesta
    document.getElementById(`btnId`).classList.remove("bg-slate-200");
    document.getElementById(`btnId`).classList.add(bgColor);
}

function nextQuestion() {
  currentQuestion++;
  console.log(currentQuestion);
  printQuestion();
}

printQuestion();
