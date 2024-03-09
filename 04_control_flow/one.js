// //if

// if(true){

// }
// if(false){

// }

const isLoggedIn = false;

if(isLoggedIn){
    console.log("Hello");
}
else{
    console.log("bye");
}

// <, > ,<=, >=,==, ===,!=,

const balance = 1000;

 if(balance <500){
    console.log("Good");
 }
 else if(balance>750){
  console.log("Very Good");
 }
 else if(balance>950){
    console.log("Excellent");
 }

const isUserLoggedIn = true;
const debircard = true;

if(isUserLoggedIn && debircard && 5==5){
   console.log("Ready to purchase course");
}

const isLoggedInFromGoogle = true;
const isLoggedInFromEmail = false;

if(isLoggedInFromGoogle || isLoggedInFromEmail){
    console.log("Show Signin Button");
}
