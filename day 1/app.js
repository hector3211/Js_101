// this is a comment!

// document.write('hello world');
// alert('hello People');
// console.log('hello world');


// Variables
let name = "hector";

// good practice to put camelCase or underscore_
let myNumber = 12;
let my_second_number = 21;

// can write out multiple variables at once
let address, id;
let lastName = "Oropesa";

// const (CONSTANT)
const constOne = "Oropesa";
// const needs a value
// example = const hey = "hey":


// var , use let when making variables its better practice
var value_ = "hector";

// concatenating strings
let fullName = value_ + " " + lastName;

// adding number
let numbers = 20;
numbers += 1;


// calculating whole slices of pizza
const pizzaSlices = 10;
const familyMembers = 4;
const slices_for_each = pizzaSlices % familyMembers;


// implicit type conversion
// you can calculate strings that are numbers
// but when (adding) they concatenate
let number3 = "10";
let number4 = "23";

const result = number3 - number4; // this is not good practice!


// arrays
const friend1 = "isi"
const friend2 = "hector"
const friend3 = "nina"

const friends = [friend1, friend2, friend3, "mia", 1, 12];
// adding to array
friends.push("hey");
// changing values in a array
friends[6] = "hello";

// logging actions
// EXAMPLE: console = console.log(friends);

// functions
function myFunc() {
    console.log("this is a function");
}
// calling the function
// myFunc()


function myFunc2(param) {
    console.log("this is my second function" + param);
}
// myFunc2(friends)

// function returns 
let dimensions = [];

function myFunc3(_value, _value2) {
    let results = _value * _value2 / 144;
    return dimensions.push(results);
}
let value = 36;
let value2 = 25.5;
myFunc3(value, value2);

// function expression (another way to call a function)
let add = function (num1, num2) {
    return num1 + num2;
}
// we call it 
// add(1,2);


// Objects
let myObject = {
    name: "hector",
    lastName: "Oropesa",
    age: "26",
    siblings: ["yaima"],
    gretting: function () {
        console.log("hello my name is hector");
    }
}
// calling object
// console.log(myObject.siblings[0]);
// myObject.gretting();
// changing values in an Object
myObject.name = "Nina"
//console.log(myObject.name)

// car object
const car = {
    make: "Ford",
    model: "mustang",
    year: 2007,
    color: "red",
    hybrid: false,
    drive: function () {
        console.log("car is driving!");
    },
    stop: function () {
        console.log("car has stopped!");
    },
};

// calling our car object below!
// console.log(car.make, car.model, car.drive());

// condition statements!
if (2 < 1) {
    console.log("hello hector!");
} else {
    console.log("false!");
}

// more conditional statements!
const num1 = 6;
const num2 = 6;

if (num1 > num2) {
    console.log("first number is bigger")
} else if (num1 == num2) {
    console.log("both number equal each other");
} else {
    console.log("second number is bigger!")
}