const user = {
    username : "Vishal Sharma",
    loginCount : 10,
    isLoggedIn : true,

    getUserDetails : function(){
        //console.log(`Username : ${this.username}`);
       //console.log(this);
    }
}
//console.log(this)
//console.log(user.getUserDetails());

function User (username,loginCount, isLoggedIn){
   this.username = username;
   this.loginCount = loginCount;
   this.isLoggedIn = isLoggedIn;

   this.greetings = function(){
    console.log(`Welcome to our world ${this.username}`)
   }

   return this;
}

const userOne = new User("Vishal Sharma",12,true);
const userTwo = new User("Umang Sharma",3,false);
console.log(userOne.greetings());
console.log(userTwo);


