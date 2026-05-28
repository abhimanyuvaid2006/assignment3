const question = document.getElementById("question");
const answers = document.getElementById("answers");




// to trach user in the story
let currentState = "start";

function addAnswerButton(text, nextState) {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = text;
    button.addEventListener("click",()=> {
        currentState = nextState;
        renderQuestion();
    });
    li.appendChild(button);
    answers.appendChild(li);
}


function renderQuestion() {
    answers.innerHTML = "";

    if (currentState === "start") {
        question.textContent = "You wake up on a deserted island. Where do you go?";
        addAnswerButton("Explore the beach", "beach");
        addAnswerButton("Go into the jungle", "jungle");
        addAnswerButton("Climb the mountain", "mountain");

    } else if (currentState === "beach") {
        question.textContent = "You find a broken boat and a signal fire pit. What do you do?";
        addAnswerButton("Fix the boat", "boat");
        addAnswerButton("Light the signal fire", "ending-a");

    } else if (currentState === "boat") {
        question.textContent = "The boat is fixed but a storm is coming. What do you do?";
        addAnswerButton("Wait for the storm to pass", "ending-b");
        addAnswerButton("Sail through the storm", "ending-c");

    } else if (currentState === "jungle") {
        question.textContent = "You hear water and spot some fruit trees. What do you do?";
        addAnswerButton("Follow the sound of water", "river");
        addAnswerButton("Climb a tree for fruit", "ending-d");

    } else if (currentState === "river") {
        question.textContent = "You find a freshwater river. Which way do you follow it?";
        addAnswerButton("Follow it upstream", "ending-e");
        addAnswerButton("Follow it downstream", "ending-f");

    } else if (currentState === "mountain") {
        question.textContent = "Halfway up you find a cave and an old radio. What do you do?";
        addAnswerButton("Rest in the cave", "cave");
        addAnswerButton("Try the radio", "ending-g");

    } else if (currentState === "cave") {
        question.textContent = "Inside the cave you find supplies. What do you do?";
        addAnswerButton("Take supplies and keep climbing", "ending-h");
        addAnswerButton("Stay in the cave and wait", "ending-i");

    } else if (currentState === "ending-a") {
        question.textContent = "You lit the fire and a passing ship spotted it. You are rescued!";
        addAnswerButton("Play Again", "start");

    } else if (currentState === "ending-b") {
        question.textContent = "You waited for the storm to pass and sailed home safely.";
        addAnswerButton("Play Again", "start");

    } else if (currentState === "ending-c") {
        question.textContent = "The storm capsized your boat. You swam back to shore.";
        addAnswerButton("Play Again", "start");

    } else if (currentState === "ending-d") {
        question.textContent = "You ate the fruit and found a trail that led you home.";
        addAnswerButton("Play Again", "start");

    } else if (currentState === "ending-e") {
        question.textContent = "Upstream you found a hidden village. They helped you get home.";
        addAnswerButton("Play Again", "start");

    } else if (currentState === "ending-f") {
        question.textContent = "The river led to the ocean. You signaled a boat and got rescued.";
        addAnswerButton("Play Again", "start");

    } else if (currentState === "ending-g") {
        question.textContent = "The radio worked! You reached the coast guard and got rescued.";
        addAnswerButton("Play Again", "start");

    } else if (currentState === "ending-h") {
        question.textContent = "You reached the top and spotted a nearby island. You were saved.";
        addAnswerButton("Play Again", "start");

    } else if (currentState === "ending-i") {
        question.textContent = "A rescue helicopter spotted the cave entrance and saved you.";
        addAnswerButton("Play Again", "start");
    }
}

function nextQuestion() {
    currentState = "start";
    renderQuestion();
}

renderQuestion(); 
    

  