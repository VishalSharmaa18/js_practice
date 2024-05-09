// //ES6
// class user {
//     constructor(username,email,password){
//          this.username = username;
//          this.email = email;
//          this.password = password;
//     }
    
//      encryptPassword (){
//         return`${this.password}abc`
//     }

//     changeUsername(){
//         return`${this.username.toUpperCase()}`
//     }
// }

// const user1 = new user("Vishal","Vishal@Yahoo.com",1234);

// console.log(user1.encryptPassword());
// console.log(user1.changeUsername());

//behind the scene

function user (username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}

user.prototype.encryptPassword = function(){
    return`${this.password}abc`
}
user.prototype.changeUsername = function(){
    return`${this.username.toUpperCase()}`
}

const user2 = new user("Krishna","Krishna@Yahoo.com",12346);

console.log(user2.encryptPassword());
console.log(user2.changeUsername());

