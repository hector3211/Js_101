let weight = prompt("What is your weight in Kg? ");
let height = prompt("What is your weight in Meters? ");

function bmiCalc(_weight, _height) {
  let bmi = _weight / _height ** 2;
  let result = Math.round(bmi);
  if (result < 18.5) {
    return alert(`your BMI is ${result} you are underweight lets bulk up`);
  } else if (result < 24.9 && result > 18.5) {
    return alert(`your BMI is ${result} you have a normal weight!`);
  } else {
    return alert(`your BMI is ${result} lets go and workout together!`);
  }
}

bmiCalc(weight, height);
