// jshint esversion:6

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  console.log(req.body);
  let num1 = Number(req.body.num1); // these are strings at first
  let num2 = Number(req.body.num2); // these are strings at first
  let result = num1 + num2;
  res.send("that equals:  " + result);
});

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmicalculator.html");
});
app.post("/bmicalculator", function (req, res) {
  let weight = Number(req.body.weight);
  let height = Number(req.body.height);
  let bmi = weight + height;
  res.send("Your BMI is: " + bmi);
});
app.listen(3000, function () {
  console.log("server started on port 3000");
});
