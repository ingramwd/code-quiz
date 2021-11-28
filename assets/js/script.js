var start = document.getElementById("start")
var beingQuestion = document.getElementById("question-btn")
var question = document.getElementById("question")
var optionEl = document.getElementById("answer-btn")


start.addEventListener("click", startQuiz);

function startQuiz() {
    start.classList.add("hide")
    highscore.classList.add("hide")
    beginQuestion();
}

function beginQuestion() {
    question.innerText = questionArr[id].Question;
};

function nextQuestion() {

}

function Answer() {

}

var questionArr = [
    {
        Question: "Who created JavaScript?",
        options: [
            { text: "Al Gore", Correct: false },
            { text: "Brendan Eich", Correct: true },
            { text: "Bill Gates", Correct: false },
            { text: "Steve Jobs", Correct: false },
        ]
    },
    {
        Question: "What does CSS stand for?",
        options: [
            { text: "cascading style sheets", Correct: true },
            { text: "creative style sheets", Correct: false },
            { text: "compact style script", Correct: false },
            { text: "compressed style sheets", Correct: false },
        ]
    },
    {
        Question: "What allows users to interact with web pages?",
        options: [
            { text: "HTML", Correct: false },
            { text: "CSS", Correct: false },
            { text: "Javascript", Correct: true },
            { text: "Mouse & Keyboards", Correct: false },
        ]
    },
    {
        Question: "Can you add HTML elements dynamically with Javascript",
        options: [
            { text: "No", Correct: false },
            { text: "Maybe", Correct: false },
            { text: "Only with jquery", Correct: false },
            { text: "Yes", Correct: true },
        ]
    },
];

