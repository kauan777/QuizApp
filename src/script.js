const StartBtn = document.getElementById("start-btn")
const content = document.getElementById("questions-all")
const questionHTML = document.getElementById("question")
const answerHTML = document.getElementById("answer-buttons")
const NextBtn = document.getElementById("next-btn1")
let embaralharQuestions, IndexQuestion;

StartBtn.addEventListener("click", ()=>{
    console.log("started")
    StartBtn.classList.add("hide")
    embaralharQuestions = questions.sort(()=> Math.pow() - .5)
    IndexQuestion = 0;
    content.classList.remove("hide")
    setNextQuestion()
})

NextBtn.addEventListener("click", ()=>{
    IndexQuestion++
    setNextQuestion();
})




function setNextQuestion(){
    resetState();
    MostrarQuestion(embaralharQuestions[IndexQuestion])
}

function MostrarQuestion(question){

    questionHTML.innerHTML = question.question;  
    question.answer.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add('btn');
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer);
        answerHTML.appendChild(button)
    }); 
}

function resetState(){
    clearStatus(document.body)
    NextBtn.classList.add("hide")
    while(answerHTML.firstChild){
        answerHTML.removeChild(answerHTML.firstChild)
    }

}

function selectAnswer(e){
    const selectBtn = e.target
    const correct = selectBtn.dataset.correct
    setStatus(document.body, correct)
   Array.from(answerHTML.children).forEach(button =>{
       setStatus(button, button.dataset.correct)
   })
   if(embaralharQuestions.length > IndexQuestion + 1){
         NextBtn.classList.remove("hide")
   }else{
       StartBtn.innerHTML ="Restart"
       StartBtn.classList.remove("hide")
   }
}
 
function setStatus(element, correct){
    clearStatus(element) //eu consigo fazer uma função receber um parametro em uma outra function
        if(correct){
            element.classList.add("correct")
        }else{
            element.classList.add("wrong")
        }
}

function clearStatus(element){
    element.classList.remove("correct")
    element.classList.remove("wrong")
}



const questions = [
    {
    question: "Qual meu nome?",
    answer: [
       { text: "Kauan", correct: true},
       { text: "Leonardo", correct: false}
    ]
    },
    {
        question: "Qual minha idade?",
        answer: [
           { text: "17", correct: false},
           { text: "16", correct: true},
           { text: "22", correct: false},
           { text: "21", correct: false}
        ]
        },
        {
            question: "Bryan é viado?",
            answer: [
               { text: "Sim", correct: true},
               { text: "Não", correct: false}
            ]
            } 
]


