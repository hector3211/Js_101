// class like to python
function BellBoy(name, age, experience) {
  this.name = name;
  this.age = age;
  this.experience = experience;
  this.clean = function () {
    alert("this is cleaning function inside BellBoy");
  };
}

// creating a new bellboy from already done constructor
let bellBoy2 = new BellBoy("hector", 26, 4);
console.log(bellBoy2);

let bellBoy3 = new BellBoy("hector", 26, 4);
bellBoy3.clean();
