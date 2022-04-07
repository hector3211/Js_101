function fibonacciGenerator(myNumber_) {
  let myArray = [];

  if (myNumber_ === 1) {
    myArray = [0];
  } else if (myNumber_ === 2) {
    myArray = [0, 1];
  } else {
    myArray = [0, 1];
    for (let i = 2; i < myNumber_; i++) {
      myArray.push(myArray[myArray.length - 2] + myArray[myArray.length - 1]);
    }
  }

  return myArray;
}

fibonacciGenerator(10);
