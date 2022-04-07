let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomDiceImage = "dice" + randomNumber1 + ".png";
let randomDiceImage2 = "dice" + randomNumber2 + ".png";

let randomImageSource = "images/" + randomDiceImage;
let randomImageSource2 = "images/" + randomDiceImage2;

let image1 = document.querySelector(".img1");
let image2 = document.querySelector(".img2");
image1.setAttribute("src", randomImageSource);
image2.setAttribute("src", randomImageSource2);

function winner() {
  if (randomNumber1 > randomNumber2) {
    let playerOneWinner = (document.querySelector("h1").textContent =
      "Player one wins!");
    return playerOneWinner;
  } else if (randomNumber1 === randomNumber2) {
    let tie = (document.querySelector("h1").textContent = "Its a tie!");
    return tie;
  } else {
    let playerTwoWinner = (document.querySelector("h1").textContent =
      "Player two wins!");
    return playerTwoWinner;
  }
}
winner();
