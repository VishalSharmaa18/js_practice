// Primitive

//  There are 7 types : String,number,boolean,null,undefined,symbol,bigint


let myScore = "Vishal";
const score = 100.3;
const age = 23;
let isLoggedIn = true;
const email = null;
let gender;

let bookletNumber = Symbol('123');
let sheetNumber = Symbol('123')
console.log(bookletNumber == sheetNumber);

//Non Premitive

// 3 Types: Array,Object,Functions

const heros = ['Spiderman','Virat Kohli','Rohit Sharma'];
// console.log(heros[1]);

const myProfile = {
    name : "Vishal",
    age : 23,
    email : 'vishal@google.com'
}
// console.log(myProfile);

const myFunction = function() {
    console.log("/Hello World");
}

// ++++++++++++++++++++++ Stack and Heap Memory +++++++++++++++++++ //

// Stack == Primitive    &&&&&&    Heap == Non- Premitive //

let myYoutubeChannelName = "The Drifter Vishal";
let anotherChannelName = myYoutubeChannelName;
anotherChannelName = "Vishal sharma";
console.log(myYoutubeChannelName);
console.log(anotherChannelName);

//Heap Example

let userOne = {
    name: "kushal",
    email : "kushal@google.com"
}

let userTwo = userOne
console.log(userTwo);

userTwo.email = "Vishal@google.copm"
console.log(userOne.email);
console.log(userTwo.email);
console.log(typeof userOne);

