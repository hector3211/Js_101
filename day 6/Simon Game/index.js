const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;

function nextSequence(level_) {
  // random number
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  // random number selects a random color from our main const array
  let randomChosenColor = buttonColors[randomNumber];
  // we add the selected item to our game pattern array
  gamePattern.push(randomChosenColor);
  // here we make the selected color flash
  let htmlId = "#" + randomChosenColor;
  $(htmlId).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  // audio.play();
  // increase the level by 1
  console.log(level);
  if (level > 0) {
    $("#level-title").text("Level " + level);
  }
  return randomChosenColor;
}

function playSound() {
  // if a certain btn is clicked we grab the id of that btn
  $(".btn").click(function (e) {
    let userChosenColor = e.target.id;
    var audio = new Audio("sounds/" + userChosenColor + ".mp3");
    audio.play();
    // we add it to our userClickedPattern array
    userClickedPattern.push(userChosenColor);
    checkAnswer(level);
  });
}

function animatePress() {
  let $btn = $(".btn").click(function (e) {
    let color = e.target.id;
    $("#" + color).addClass("pressed");
    setTimeout(function () {
      $btn.removeClass("pressed");
    }, 100);
  });
}

function checkAnswer(currentLevel) {
  if (
    gamePattern[gamePattern.length - 1] ===
    userClickedPattern[userClickedPattern.length - 1]
  ) {
    setTimeout(nextSequence, 100);
  } else {
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");
    $("#level-title").text("GAME OVER! Press a to restart");
    return (level = 0);
  }
  return (userClickedPattern.length = 0), level++;
}

setTimeout(animatePress, 100);
playSound();

// starting the game
$("body").keypress(function (event) {
  if (event.key === "a") {
    $("#level-title").text("Level 0");
    $("body").removeClass("game-over");
    nextSequence();
  }
});
