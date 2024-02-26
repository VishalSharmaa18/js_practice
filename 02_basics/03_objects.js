//Singleton
let mySym = Symbol("My Symbol");
//Literal Obj
const myUser = {
name : "Vishal",
"full Name" : "Vishal Sharma",
[mySym] : "mySymbol1",
age : 24,
email : "Vishal@google.com",
isLoggedIn : false,
lastLoginDays : ["Monday","Tuesday"]
}

// console.log(myUser.age);
// console.log(myUser["name"]);
// console.log(myUser["full Name"]);
// console.log(myUser[mySym]);

// myUser.email = "Vishal@gemini.com"
// console.log(myUser.email);
// myUser.email = "Vishal@yahoo.com"
// console.log(myUser);

myUser.greetings = function (){
    console.log(`Hello My user, ${this.name}`);
}

console.log(myUser.greetings());
