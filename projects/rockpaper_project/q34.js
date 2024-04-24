let userScore = 0;
let robotScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const roboScorePara = document.querySelector("#robot-score");

const genRoboChoices = () =>{
    const options = ["scissor", "paper", "rock"]
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const draw = () => {
    console.log("its draw");
    msg.innerText = "Game draw, play again";
    msg.style.backgroundColor = "rgb(14, 14, 78)";
}

const showWinner = (userWin, userChoice, roboChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win!");
        msg.innerText = `You win! your ${userChoice} beats ${roboChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        robotScore++;
        roboScorePara.innerText = robotScore;
        console.log("you lose!");
        msg.innerText = `You lose! ${roboChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice =",userChoice);
    //generate robot choice
    const roboChoice = genRoboChoices();
    console.log("robo choice =", roboChoice);

    if (userChoice === roboChoice){
        //Draw
        draw();
    } else {
        let userWin = true;
        if (userChoice === "rock"){
            //scissor , paper
            userWin = roboChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            //rock, scissor
            userWin = roboChoice === "scissor" ? false : true; 
        } else {
            //rock, paper
            userWin = roboChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, roboChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});