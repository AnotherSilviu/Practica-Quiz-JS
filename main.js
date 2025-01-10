const questions = [
    {
        id: 1,
        question: "¿Quién es el más tonto de clase?",
        answers: ["Ricardo", "David", "Alejandro"],
        correctAnswer:"Ricardo",
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

function printQuestion() {
    //Pintar el titulo de la pregunta
    title.innerText = question[currentQuestion].question;
    //De la pregunta actual
    let questionAnswers = questions[currentQuestion].answers;
    //Desordena las respuestas para que no esten siempre en el mismo orden
    questionAnswers.sort(()=> Math.random() = 0.5);
    //Antes de pintar las NUEVAS respuestas, se borra el contenido del div
    answerBox.innerHTML = " ";
    //Se generan los botones de respuesta
    questions[currentQuestion].answers.forEach((answer) => {
        answerBox.innerHTML += `<button
                class="bg-slate-200 rounded-lg p-2.5 hover:bg-slate-800 hover:text-white transition-all"
                id="btn1"
              >
                ${answer}
              </button>`;    
})};

function nextQuestion() {
    currentQuestion++;
    console.log(currentQuestion);
    printQuestion()
};