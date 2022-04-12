const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const query = req.body.cityName;
  const apiKey = "62ddfef51dd9cb817fcc6dc2982df7f2";
  const units = "imperial";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    apiKey +
    "&units=" +
    units +
    "";
  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imgURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write(
        "<h1>temperature in" + query + " is: " + temp + "degrees Celsius</h1>"
      );
      res.write("<h1>The weather description is: " + description + "</h1>");
      res.write("<img src=" + imgURL + ">");
      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("sever is running on port 3000");
});
