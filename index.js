// let userscore = 0;
// let compscore = 0;

// const choices = document.querySelectorAll(".choice");
// const msg = document.querySelector("#msg")
// const userscorePara = document.querySelector("#userscore"); 
// const computerscorePara = document.querySelector("#computerscore"); 
// // 3
// const getcomputerchoice = () =>{
//   let options = ["rock","paper","scissors"];
//   const randindx = Math.floor(Math.random()*3);
//   return options[randindx];
// }
// // 4
// const drawgame = () =>{
//   console.log("Game was Draw");
//   msg.innerText = "Draw The Game!";
//   msg.style.backgroundColor = "#081b31";
// }
// // 5
// const showwinner = (userwin,userchoice,computerchoice) =>{
//   if(userwin){
//     userscore++;
//     userscorePara.innerText = userscore;
//     console.log("you win");
//     msg.innerText = `You Win! ${userchoice} beats ${computerchoice}`;
//     msg.style.backgroundColor = "green"
//   }
//   else{
//     compscore++;
//     computerscorePara.innerText = compscore;
//     console.log("you lose")
//     msg.innerText = "You lose!";
//     msg.innerText = `You lose! ${computerchoice} beats ${userchoice}`;
//      msg.style.backgroundColor = "red"
//   }
// }
// // 2
// const playgame = (userchoice) =>{
//  console.log("user choice =",userchoice);
//  //generate computer choice
//  const computerchoice =  getcomputerchoice();
//  console.log("computer choice = ",computerchoice)

//  if(userchoice === computerchoice){
//   // Draw game
//   drawgame();
//  }else{
//   let userwin = true;
//   if(userchoice === "rock"){
//     // scessors,paper
//     userwin = computerchoice === "paper"?false: true;

//   }
//   else if(userchoice === "paper"){
//     // scessors,rock
//     userwin = computerchoice === "scissors"?false:true;
//   }
//   else{
//     // rock,paper
//      userwin = computerchoice === "rock"?false:true;
//   }
//   showwinner(userwin,userchoice,computerchoice);
//  }
// }

// // 1
// choices.forEach((choice) => {
//     console.log(choice);
//     choice.addEventListener("click",()=>{
//         const userchoice = choice.getAttribute("id")
//       playgame(userchoice)
//     });
// });


let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorePara = document.querySelector("#userscore"); 
const computerscorePara = document.querySelector("#computerscore"); 

const getComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * options.length);
    return options[randIdx];
};

const drawGame = () => {
    showMessage("Draw The Game!", "#081b31");
};

const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        userscore++;
        animateScore(userscorePara);
        userscorePara.innerText = userscore;
        showMessage(`You Win! ${userChoice} beats ${computerChoice}`, "green");
    } else {
        compscore++;
        animateScore(computerscorePara);
        computerscorePara.innerText = compscore;
        showMessage(`You Lose! ${computerChoice} beats ${userChoice}`, "red");
    }
};

const playGame = (userChoice) => {
    const computerChoice = getComputerChoice();
    if (userChoice === computerChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = computerChoice === "scissors" ? false : true;
        } else {
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
};

const showMessage = (text, bgColor) => {
    msg.innerText = text;
    msg.style.backgroundColor = bgColor;
    msg.classList.remove("show");
    void msg.offsetWidth; // force reflow
    msg.classList.add("show");
};

const animateScore = (element) => {
    element.classList.add("score-animate");
    setTimeout(() => {
        element.classList.remove("score-animate");
    }, 300);
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        choice.classList.add("bounce");
        setTimeout(() => {
            choice.classList.remove("bounce");
        }, 400);
        playGame(userChoice);
    });
});


