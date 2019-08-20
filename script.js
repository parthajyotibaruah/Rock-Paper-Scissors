const body = document.querySelector("body");
const container = document.querySelector("#container");
const results = document.querySelector("#results");
const choices = document.querySelector("#choices");
const buttons = document.querySelectorAll("button");
const logResult = document.createElement("h3");
const logChoices = document.createElement("p");
const scoreboard = document.querySelector("#scoreboard");
const logPlayerScore = document.querySelector("#logPlayerScore");
const logComputerScore = document.querySelector("#logComputerScore");
const logRound = document.querySelector("#logRound");

const scores = {
    playerScore: 0,
    computerScore: 0
}

results.appendChild(logResult);
choices.appendChild(logChoices);

let round = 0;

function computerPlay() {

    let computerChoice = Math.random();

    if (computerChoice < 0.34) {
        computerChoice = "ROCK";
    }

    else if (computerChoice <= 0.67) {
        computerChoice = "PAPER";
    }

    else { computerChoice = "SCISSORS"; }

    return computerChoice;
}



function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        logResult.innerHTML = "Outcome: " + "This round is a tie! Both picked " + `${computerSelection}`;
        scoreChange();

    }

    else if (playerSelection == "ROCK") {
        if (computerSelection == "PAPER") {
            userLose(); //Rock loses to paper.


        }
        else if (computerSelection == "SCISSORS") {
            userWin(); //Rock defeats scissors.
        }
    }

    else if (playerSelection == "PAPER") {
        if (computerSelection == "SCISSORS") {
            userLose(); //Paper loses to scissors.
        }
        else if (computerSelection == "ROCK") {
            userWin(); //Paper defeats rock.

        }
    }

    else if (playerSelection == "SCISSORS") {
        if (computerSelection == "ROCK") {
            userLose(); //Scissors lose to rock.

        }
        else if (computerSelection == "PAPER") {
            userWin(); //Scissors defeat paper.

        }
    }

}


function scoreChange(playerScore, computerScore) {
    logRound.innerHTML = "Round: " + `${round}`;
    logPlayerScore.innerHTML = "Your score: " + `${scores.playerScore}`;
    logComputerScore.innerHTML = "Computer's score: " + `${scores.computerScore}`;
}

function userWin() {
    scores.playerScore++;
    logResult.innerHTML = "Outcome: " + "You win! " + `${playerSelection}` + " beats " + `${computerSelection}` + ".";
    scoreChange();
}

function userLose() {
    scores.computerScore++;
    logResult.innerHTML = "Outcome: " + "You lose! " + `${computerSelection}` + " beats " + `${playerSelection}` + ".";
    scoreChange();
}

function reset() {
    logChoices.innerHTML = "";
    logResult.innerHTML = "Game restarted";
    scores.playerScore = 0;
    scores.computerScore = 0;
    round = 0;
    scoreChange();
}

function win() {
    body.removeChild(container);
    const declaration = document.createElement("div");
    declaration.style.color = "white";
    document.body.appendChild(declaration);
    const p = document.createElement("p");
    p.style.fontSize = "30px";
    declaration.appendChild(p);
    declaration.style.backgroundColor = "green";
    declaration.style.pAlign = "center";
    p.innerHTML = "Congrats! you won the game."
}


function lose() {
    body.removeChild(container);
    const declaration = document.createElement("div");
    declaration.style.color = "white";
    document.body.appendChild(declaration);
    const p = document.createElement("p");
    p.style.fontSize = "30px";
    declaration.appendChild(p);
    declaration.style.backgroundColor = "red";
    declaration.style.pAlign = "center";
    p.innerHTML = "Oops! you lost. Better luck next time."
}

function tie() {
    body.removeChild(container);
    const declaration = document.createElement("div");
    declaration.style.color = "white";
    document.body.appendChild(declaration);
    const p = document.createElement("p");
    p.style.fontSize = "30px";
    declaration.appendChild(p);
    declaration.style.backgroundColor = "grey";
    declaration.style.pAlign = "center";
    p.innerHTML = "This game ends in a tie!"
}


function game() {
    
    playRound(playerSelection, computerSelection);

    logChoices.innerHTML = "You picked " + `${playerSelection}` + " and " + "Computer picked " + `${computerSelection}`;


    if (scores.playerScore === 5 || (scores.computerScore === 5 && scores.playerScore > scores.computerScore)) {
        win();
        reset();

    }
    else if (scores.playerScore === 5 || (scores.computerScore === 5 && scores.playerScore < scores.computerScore)) {
        lose();
        reset();

    }
    else if (scores.playerScore === 5 && scores.computerScore === 5) {
        tie();
        reset();
    }




}


buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        if (button.id === "RESTART") {
            reset();
        }
        else {
            playerSelection = button.id;
            computerSelection = computerPlay();
            round++;
            game();
            // console.log(playerSelection, computerSelection, playRound(playerSelection, computerSelection));

        }
    })
});



