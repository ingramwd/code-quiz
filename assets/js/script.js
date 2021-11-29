var start = document.getElementById("start")
var question = document.getElementById("question")
var optionEl = document.getElementById("answer-btn")
var questionCard = document.getElementById("question-card")
var optionBtnA = document.getElementById("0")
var optionBtnB = document.getElementById("1")
var optionBtnC = document.getElementById("2")
var optionBtnD = document.getElementById("3")



start.addEventListener("click", startQuiz);

optionBtnA.addEventListener("click", answerCheck)
optionBtnB.addEventListener("click", answerCheck)
optionBtnC.addEventListener("click", answerCheck)
optionBtnD.addEventListener("click", answerCheck)

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

var id = 0;

function startQuiz() {
    start.classList.add("hide")
    highscore.classList.add("hide")
    questionCard.classList.remove("hide")
    beginQuestion();
}

function beginQuestion() {

    question.innerText = questionArr[id].Question;
    optionBtnA.innerText = questionArr[id].options[id].text;
    optionBtnB.innerText = questionArr[id].options[id + 1].text;
    optionBtnC.innerText = questionArr[id].options[id + 2].text;
    optionBtnD.innerText = questionArr[id].options[id + 3].text;

};

function answerCheck(event) {
    console.log(event.target)
    console.log(event.target.id)
    console.log(questionArr[0].options[event.target.id].Correct)

    if (questionArr[0].options[event.target.id].Correct === true) {
        window.alert("You got it right!")

    }
    else {

    }


}


// Acceptance Criteria
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score