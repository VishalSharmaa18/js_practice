class User {
    constructor(username){
     this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class UserDetails extends User {
    constructor(username,email,age){
        super(username)
        this.email = email;
        this.age = age;
    }
    addAnotherDetail(){
        console.log(`A new detail was added by ${this.username}`);
    }
}

 const user1 = new UserDetails("Vishal","Vishal@google.com",24);
 user1.addAnotherDetail();
   user1.logMe();

   const newUser = new User("Hitesh")
   newUser.logMe();
//    newUser.addAnotherDetail();

//console.log(User === UserDetails)

console.log(user1 instanceof User)
