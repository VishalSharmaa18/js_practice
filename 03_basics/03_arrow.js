const course = {
    courseName : "NextJs",
    cpursePrice : 4999,
     price : function (){
           console.log(`Name of the course is ${this.courseName}, and price of course is ${this.cpursePrice}`);
    }
}
// course.price();
// course.courseName = "Mern-stack";
// course.price();

// function value(){
// console.log(this);
// }
// value();

// function chai() {
//     let userName = "Vishal"
//     console.log(this.userName);
// }
// chai();

// const chai = function (){
//     let userName = "vishal";
//     console.log(this.userName);
// }
// chai();

// const chai = () => {
//     let userName ="vishal"
//     console.log(this.userName);
// }
// chai();

const addNum = (num1,num2) =>  num1 + num2;
console.log(addNum(3,4));

const square = (number1,number2) =>  (number1 * number2);
console.log(square(4,4));

// const user = () =>  {return{userName : "Vishal"}}
// console.log(user());

const user = () =>  ({userName : "Vishal"})
console.log(user());
