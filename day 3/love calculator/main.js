let n = Math.random();
let nameOne = prompt("Enter a name");
let nameTwo = prompt("Enter a name");

function loveCalc(_nameOne, _nameTwo) {
  let randomNumber = n * 100;
  let result = Math.round(randomNumber);
  if (result > 50 && result < 70) {
    return alert(`your love score is ${result}% you guys have a chance!`);
  } else if (result > 70) {
    return alert(`your love score is ${result}% you guys have the MAGIC!`);
  } else {
    return alert(`your love score is ${result}% you guys are down bad!`);
  }
}

loveCalc(nameOne, nameTwo);
