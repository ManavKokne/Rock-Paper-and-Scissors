const choices = document.querySelectorAll(".choices");
const msg = document.querySelector("#msg");
let uScore = document.querySelector("#user");
let cScore = document.querySelector("#comp");
let userScore = 0;
let compScore = 0;

const genComp = () => {
    let choice = ["paper", "rock", "scissors"];
    let compChoice = (Math.floor(Math.random() * 3));
    return choice[compChoice];
}

const draw = () => {
    console.log("Draw");
    msg.innerText = "Game Was Draw.";
    msg.style.backgroundColor = "#ffc300";
    // msg.classList.add("draw");
}

const showWinner = (userWin,userChoice, compChoice) => {
    if(userWin){
        userScore++;
        uScore.innerText = `${userScore}`;
        console.log("Win");
        msg.innerText = `Computer's Choice was ${compChoice}, You Win !`;
        msg.style.backgroundColor = "#80b918";
        // msg.classList.add("win");
    }
    else{
        compScore++;
        cScore.innerText = `${compScore}`;
        console.log("Lose");
        msg.innerText = `Computer's Choice was ${compChoice}, You Lose !`;
        msg.style.backgroundColor = "#fc2f00";
        // msg.classList.add("lose");
    }
}

const playGame = (userChoice) => {
    console.log("User's Choice : ",userChoice);
    let compChoice = genComp();
    console.log("Computer's Choice : ",compChoice);

    if(userChoice === compChoice){
        draw();
    }
    else{
        let userWin = true;
        if(userChoice === "paper"){
            //rock scissors
            if(compChoice === "scissors"){
                userWin = false;
            }
        }
        else if(userChoice === "rock"){
            //paper scissors
            if(compChoice === "paper"){
                userWin = false
            }
        }
        else{
            if(compChoice === "rock"){
                userWin = false;
            }
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        // console.log("Choice was clicked was : ",userChoice);
        playGame(userChoice);
    });
});

