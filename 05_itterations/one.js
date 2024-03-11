// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(i==5){
//         console.log("5 is the best number");
//     }
//     console.log(element);
// }

// let myArray = ["Virat Kohli","Rohit Sharma","MS Dhoni"]
// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(`The Real Superheros are ${element}`);    
// }

//break and continue

for (let index = 0; index < 10; index++) {
  if (index==5) {
    console.log("5 is the best number");
    break;
  }
  console.log(`Value of index is ${index}`);
}