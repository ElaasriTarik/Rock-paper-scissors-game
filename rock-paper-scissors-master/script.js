const closeIcon = document.querySelector('.closeIcon')
const rulesBox = document.querySelector('.rulesBox')
const openRules = document.querySelector('.displayRules')
let score = document.querySelector('.score')
let gameplay = document.querySelector('.gameplay')
let choicesBoxes = document.querySelectorAll('.boxHover')
let userChoice = document.querySelector('.userChoice')
let robotChoice = document.querySelector('.robotChoice')
let firstStage = document.querySelector('.firstStage')
let secondStage = document.querySelector('.secondStage')
const images = ["images/icon-paper.svg", "images/icon-rock.svg", "images/icon-scissors.svg"]
let bothChoices = []
let winCase = document.querySelector('.winCase')
const resultBox = document.querySelector('.resultBox')
const tryAgainBtn = document.querySelector('.tryAgain')
choicesBoxes.forEach((item, i) => {
     item.addEventListener('click', (e) => {
       firstStage.style.display ='none'
       gameplay.style.backgroundImage = 'none'
       secondStage.style.display = 'flex'
       userChoice.innerHTML = `<p class="thePicks">YOU PICKED</p> <img src=${item.children[0].src} class="paperChoice choice afterChoice"/>`
      const user = e.target.src.slice(34, (e.target.src.length - 4))
      randomPick(user)
     })
});

function randomPick(user) {
  const randomImage = images[Math.floor(Math.random()*images.length)];
  robotChoice.innerHTML = `<p class="thePicks">THE HOUSE PICKED</p> <img src=${randomImage} class="paperChoice choice afterChoice"/>`
  const robot = robotChoice.children[1].src.slice(34, (robotChoice.children[1].src.length - 4))
  checkWin(user, robot)
}
let userScore = 0;
score.textContent = userScore;
function checkWin(user, robot) {
  resultBox.style.display = "flex";

  //changing color...

  if (user === "paper") {
     userChoice.style.border = "10px solid hsl(230, 89%, 65%)"
  }
  if (user === "scissors") {
     userChoice.style.border = "10px solid hsl(40, 84%, 53%)"
  }
  if (user === "rock") {
     userChoice.style.border = "10px solid hsl(349, 70%, 56%)"
  }
  if (robot === "paper") {
     robotChoice.style.border = "10px solid hsl(230, 89%, 65%)"
  }
  if (robot === "scissors") {
     robotChoice.style.border = "10px solid hsl(40, 84%, 53%)"
  }
  if (robot === "rock") {
     robotChoice.style.border = "10px solid hsl(349, 70%, 56%)"
  }
  // check  fro  winner
    if (user === robot) {
     winCase.textContent = "DRAW"
   } else if(user === "paper" && robot ===  "scissors"){
     winCase.textContent = "YOU LOSE"
   }
   else if(user === "paper" && robot === "rock"){
     winCase.textContent = "YOU WIN"
   }
   else if(user === "rock" && robot === "paper"){
     winCase.textContent = "YOU LOSE"
   }
   else if(user === "rock" && robot === "scissors"){
     winCase.textContent = "YOU WIN"
   }
   else if(user === "scissors" && robot === "paper"){
     winCase.textContent = "YOU WIN"
   }
   else if(user === "scissors" && robot === "rock"){
     winCase.textContent = "YOU LOSE"
   }
     if (winCase.textContent === "YOU WIN") {
      userChoice.style.boxShadow = "0 0 10px 10px hsl(217, 16%, 45%)"
      userScore+= 3;
      score.textContent = userScore
    } else if(winCase.textContent === "DRAW") {
      userScore++;
      score.textContent = userScore
    }
    else {
      userChoice.style.boxShadow = "none"
      score.textContent = userScore;
    }
}

tryAgainBtn.addEventListener('click', () => {
  gameplay.style.display = "flex";
  gameplay.style.backgroundImage = `url('images/bg-triangle.svg')`
  firstStage.style.display = "flex"
  secondStage.style.display = "none"
})

openRules.addEventListener('click', () => {
     rulesBox.style.display = 'flex';
})
closeIcon.addEventListener('click', () => {
     rulesBox.style.display = 'none';
})
