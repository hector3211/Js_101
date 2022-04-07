// grabbing all elements by tag name
document.getElementsByTagName("h1");
// this will return an array
// with that said you'll have to target the item you want [1]
document.getElementsByTagName("h1")[0].style.color = "red";
// or can use query selector
document.querySelector("#id");

document.querySelector("#btn").style.backgroundColor = "red";
// adding class names
document.querySelector("h3").classList.add("small-heading");
// removing
// document.querySelector("h3").classList.remove("small-heading");
// toggling
// document.querySelector("h3").classList.toggle("small-heading");

document.querySelector("#id").classList.toggle("huge");
// changing inside element tags
// document.querySelector("#id").innerHTML= "<en>good bye</en>";
// changing text only inside element tags
document.querySelector("#id").textContent = "wow this si cool!";
