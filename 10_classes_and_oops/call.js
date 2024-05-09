function setUserName(username){
    //Complex db calls
    this.username = username
};

function createUser(username,email,password){
    setUserName.call(this,username);
  this.email = email;
  this.password = password;
}

const user = new createUser("Vishal","Vishal@home.com","123");
console.log(user);
