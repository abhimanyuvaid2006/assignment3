const question = document.getElementById("question");
const answers = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");



// to trach user in the story
let currentState = "start";

function addAnswerButton(text, nextState) {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = text;
    button.addEventListener("click",()=>){
        currentState = nextState;
        renderQuestion();
    }
    li.appendChild(button);
    answers.appendChild(li);
}

function renderQuestion() {
    answers.innerHTML = "";
    
}
 
