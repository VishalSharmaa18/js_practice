
// function myName() {
//     console.log("V");
//     console.log("I");
//     console.log("S");
//     console.log("H");
//     console.log("A");
//     console.log("L");
// }
// myName();


// function greetings (name){
//     console.log(`Hello there! ${name}`);
// }
// greetings("Vishal");

// function addTwoNumbers(number1,number2) {
//     return number1 + number2;
//     // let result = number1 + number2
//     // return result;
// }

// const result = addTwoNumbers(2,3);
// console.log("Result :",result);

function cartAmount(...num1) {  //rest operator
    return num1
}
console.log(cartAmount(100,200,300,400,500));

const user = {
    name : "Vishal",
    age : 24
}

function myUser (userOne){
console.log(`my username is ${userOne.name} and my age is ${userOne.age}`);
return
}

console.log(myUser({
    name : "samy",
    age: 10
}));

const myNewArray =[10,20,30,40,50]

function handleArray(getArray) {
    return myNewArray[2]
}

console.log(handleArray());
