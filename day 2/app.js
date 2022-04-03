// more conditional statements ------------------------------------------------------
let firstName = 'hector';
let personAge = 22;

if (firstName == 'hector' && personAge == 26) {
  console.log('Hello ' + firstName + ' ' + personAge);
} else if (firstName == 'hector' || personAge == 26) {
  console.log('wow! one is right!');
}

// dice example----------------------------------------------------------------------
const dice = 0;

if (dice < 1 || dice > 6) {
  console.log('you did not roll the dice!');
} else {
  console.log('you got: ' + dice);
}

// switch statements ----------------------------------------------------------------
const dice2 = 1;

switch (dice) {
  case 0:
    console.log('please roll again!');
    break;
  default:
    console.log('you got: ' + dice);
}

//  loops

// while loops -----------------------------------------------------------------------
let amount = 10;

// while (amount > 0 ){
//   console.log("i have" + amount +"dollars");
//   amount -= 1;
// }

// do while loops ----------------------------------------------------------------------
// let money = 0;
// do {
//   console.log("you have "+ money+" dollars");
//   money +=1;
// } while (money < 10);

// four loops -----------------------------------------------------------------------------
// for(let num = 11;num >=0;num-- ){
//   console.log(" and your number is: " + num);
// }

// string properties and methods -----------------------------------------------------------
let text = "Lebron James ";
let results = text;
console.log(results.length);
console.log(results.toLowerCase());
console.log(results.toUpperCase());
console.log(results.indexOf("r"));
let word = " word "
console.log(word);
console.log(word.trim()); // removes white spaces
console.log(word.slice(0,3)); // slicing
console.log(word.slice(-2)); // slicing last item--- last index of string
