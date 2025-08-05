let userscore = 0;
let comscore = 0;

let choice = document.querySelectorAll(".choice");
console.log(choice);

let msg = document.querySelector("#msg");
console.log(msg.innerText);

let userscorepara = document.querySelector("#userscore");
let compscorepara = document.querySelector("#compscore");

const showwinner = (userwin, userchoice, compchoice) => {
  if (userwin) {
    userscore++;
    userscorepara.innerText = userscore;
    console.log("you wins");
    msg.innerText = `you win! your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = "green";
  } else {
    comscore++;
    compscorepara.innerText = comscore;
    console.log("you lose!");
    msg.innerText = `you lose!  ${compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};
const drawgame = () => {
  console.log("game was draw");
  msg.innerText = "game was draw! play again";
  msg.style.backgroundColor = "blue";
};
const getcompchoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randomidx = Math.trunc(Math.random() * 3);
  return options[randomidx];
};
const playgame = (userchoice) => {
  console.log("user choice= ", userchoice);
  const compchoice = getcompchoice();
  console.log("computer choice= ", compchoice);

  if (userchoice === compchoice) {
    drawgame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      // scissor,paper
      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      // scissor,prock
      userwin = compchoice === "scissor" ? false : true;
    } else if (userchoice === "scissor") {
      // rock,paper
      userwin = compchoice === "rock" ? false : true;
    }
    showwinner(userwin, userchoice, compchoice);
  }
};
choice.forEach((element) => {
  element.addEventListener("click", () => {
    const userchoice = element.getAttribute("id");

    playgame(userchoice);
  });
});
