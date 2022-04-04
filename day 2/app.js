// more conditional statements ------------------------------------------------------
let firstName = 'hector';
let lastName = "Oropesa"
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

// template literals (like f strings in python) ---------------------------------------------
console.log(`hey its ${firstName}`);


// example ---------------------------------------------------------------------------------
function fullName(_firstName,_lastName){
  results = `${_firstName} ${_lastName}`;
  console.log(results.toUpperCase());
}
fullName(firstName, lastName);


// array properties and methods -------------------------------------------------------------
let names = ["hector","nina","mia","isis"]

//length and slicing arrays
console.log(names)
console.log(names.length);
console.log(names[names.length - 1]);

// concat arrays
const lastNames = ["pepper","onion","banana"];
const allNames = names.concat(lastNames);
console.log(allNames);
// reverse
console.log(allNames.reverse());

// unshift (add the beginning of the array)
allNames.unshift("woooww");
console.log(allNames);
// remove the first item
allNames.shift();
console.log(allNames);
// adding to the end of the array
allNames.push("woooowwww");
console.log(allNames);
// removing last item in array
allNames.pop();
console.log(allNames);
// splicing - changes original array
const specificNames = allNames.splice(0,1);
console.log(specificNames);

// ternary operator --------------------------------------------------------------------
const value_ = 1>0;
value_ ? console.log("values is true") : console.log("value is false");
