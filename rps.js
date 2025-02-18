let userScore = 0;
let compScore = 0;
let msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");


const drawgame = () => {
   msg.innerText = "Game Draw, Play Again";
   msg.style.backgroundColor = "black";
}

const gencom = () => {
    const options = ["rock","paper","scissors"];
    const rdmIdx = Math.floor(Math.random() * 3);
    return options[rdmIdx];
}


const showwinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You Win ${userChoice} beats comps ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You Lose ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};



const playgame = (userChoice) => {
    const compChoice = gencom();

    if(userChoice === compChoice){
        drawgame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = (compChoice === "paper") ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = (compChoice === "scissors") ? false : true;
        }
        else{
            userWin = (compChoice === "rock") ? false : true;
        }

        showwinner(userWin,userChoice,compChoice);
    }
}


choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    })
})