//jshint eversion:6

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
});
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "you dont have a Name?!"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});
const Fruit = mongoose.model("Fruit", fruitSchema);
const fruit = new Fruit({
  name: "",
  rating: 5,
  review: "ok not the best",
});

// // returning our fruits ( like find())
// Fruit.find(function (err, fruits) {
//   if (err) {
//     console.log(err);
//   } else {
//     mongoose.connection.close();
//     fruits.forEach(function (fruit) {
//       console.log(fruit);
//     });
//   }
// });

// fruit.save();

// blueprint
const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema,
});

// creating new object called People //  THIS IS WHAT YOU CALL FOR FUNCTIONS
const People = mongoose.model("people", peopleSchema);

// creating fruit for amy not john, he does'nt like fruit
const pineapple = new Fruit({
  name: "Pineapple",
  score: 9,
  review: "Great fruit!",
});
// pineapple.save();

// filling out our blueprint
const people = new People({
  name: "Amy",
  age: 22,
  favoriteFruit: pineapple,
});
// people.save();

const mango = new Fruit({
  name: "Mango",
  score: 7,
  review: "the best are Mangos!!",
});
// mango.save();

const peopleTwo = new People({
  name: "John",
  age: 32,
  favoriteFruit: mango,
});
// peopleTwo.save();

const orange = new Fruit({
  name: "Oranges",
  score: 8,
  review: "Yo oranges are bomb!!!",
});
// orange.save();

const watermelon = new Fruit({
  name: "watermelon",
  score: 8,
  review: "watermelons are so good!",
});
watermelon.save();
// updating johns favorite fruit
People.updateOne(
  { name: "John" },
  { favoriteFruit: watermelon },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("changed johns fruit!");
    }
  }
);

// People.deleteOne({ name: "John" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("successfully removed ");
//   }
// });

People.find(function (err, people) {
  if (err) {
    console.log(err);
  } else {
    people.forEach(function (people) {
      console.log(people);
    });
    mongoose.connection.close();
  }
});
