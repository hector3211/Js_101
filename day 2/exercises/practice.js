// go through every name and add our last name to every person

const names = ["Ana","Susy","Bob"];
const lastName = "lightsout";
let newArray = [];

for (let i = 0;i < names.length;i++){
    console.log(names[i]);
    newArray.push(`${names[i]} ${lastName}`);
}
console.log(newArray);


// Exercise two
const gas = [35,40,30];
const food = [20,30,40];

function calculateTotal(array) {
    let total = 0;
    for (let i = 0;i < array.length;i++){
        total += array[i];
    }
    if(total > 50){
        console.log("You spend too much!");
        return total;
    }else{
        console.log("you did'nt spend a lot!")
    }
    return total;
}
const foodTotal = calculateTotal(food);
const gasTotal = calculateTotal(gas);
let consumption =  {
    gas: gasTotal,
    food: foodTotal,
}
console.log(consumption);
console.log(`your food cost you: ${foodTotal} your gas cost you: ${gasTotal}`);