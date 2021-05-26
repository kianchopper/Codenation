const face1 = new Image()
face1.src = "dice1.png";
const face2 = new Image()
face2.src = "dice2.png";
const face3 = new Image()
face3.src = "dice3.png";
const face4 = new Image()
face4.src = "dice4.png";
const face5 = new Image()
face5.src = "dice5.png";
const face6 = new Image()
face6.src = "dice6.png";

function rollDice() {
    return 1 + Math.floor(Math.random()*6)
  }

const score = document.getElementById("score");
const roll = document.getElementById("roll");
roll.addEventListener('click', () => {
  let number = rollDice()
      score.textContent = number;
  let image = getElementById("img");
  if(number == "1") {
    document.getElementById("img");
    image.setAttribute("src", face1);
    image.setAttribute("alt", "dice1");
    document.body.appendChild(image);
  }  })