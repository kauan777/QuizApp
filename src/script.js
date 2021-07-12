const StartBtn = document.getElementById("start-btn")
const content = document.getElementById("questions-all")
const questionHTML = document.getElementById("question")
const answerHTML = document.getElementById("answer-buttons")
const NextBtn = document.getElementById("next-btn1")
let embaralharQuestions, IndexQuestion;

StartBtn.addEventListener("click", () => {
    console.log("started")
    StartBtn.classList.add("hide")
    embaralharQuestions = questions.sort(() => Math.pow() - .5)
    IndexQuestion = 0;
    content.classList.remove("hide")
    setNextQuestion()
})

NextBtn.addEventListener("click", () => {
    IndexQuestion++
    setNextQuestion();
})




function setNextQuestion() {
    resetState();
    MostrarQuestion(embaralharQuestions[IndexQuestion])
}


function MostrarQuestion(question) {

    questionHTML.innerHTML = question.question;
    question.answer.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer, clicks);
        if (button)
            answerHTML.appendChild(button)

    });
}

let click = 0
function clicks(){
    click++
    console.log(click)
}


function resetState() {
    clearStatus(document.body)
    NextBtn.classList.add("hide")
    while (answerHTML.firstChild) {
        answerHTML.removeChild(answerHTML.firstChild)
    }

}

function selectAnswer(e) {
    const selectBtn = e.target
    const correct = selectBtn.dataset.correct
    setStatus(document.body, correct, selectBtn)
    Array.from(answerHTML.children).forEach(button => {
        setStatus(button, button.dataset.correct)
    })
    if (embaralharQuestions.length > IndexQuestion + 1) {
        NextBtn.classList.remove("hide")
    } else {
        StartBtn.innerHTML = "Restart"
        StartBtn.classList.remove("hide")
    }
}

function setStatus(body, correct) {


    clearStatus(body) //eu consigo fazer uma função receber um parametro em uma outra function
    if (correct) {
        body.classList.add("correct")
    } else {
        body.classList.add("wrong")
    }
}

function clearStatus(body) {
    body.classList.remove("correct")
    body.classList.remove("wrong")
}



const questions = [
    {
        question: "Qual meu nome?",
        answer: [
            { text: "Kauan", correct: true },
            { text: "Leonardo", correct: false }
        ]
    },
    {
        question: "Qual minha idade?",
        answer: [
            { text: "17", correct: false },
            { text: "16", correct: true },
            { text: "22", correct: false },
            { text: "21", correct: false }
        ]
    },
    {
        question: "HTML é linguagem de progamação?",
        answer: [
            { text: "Sim", correct: false },
            { text: "Não", correct: true }
        ]
    }
]


