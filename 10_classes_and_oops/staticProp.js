class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`The Username is ${this.username}`)
    }

    static createId(){
        return `123`
    }
}

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email;
    }
}

const newUser =new User("Sachin")
const redmi = new Teacher("Redmi","Redmi@bing.com")
// console.log(newUser.createId())
redmi.logMe()
//console.log(redmi.createId())