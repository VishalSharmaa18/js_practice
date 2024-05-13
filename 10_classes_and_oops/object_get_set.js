const User = {
    _email : 'viratkohli@gmail.com',
    _password : '12km',

    get email(){
       return this._email.toUpperCase() 
    },

    set email(value){
        this._email = value
    }
}

const newUser = Object.create(User);
console.log(newUser.email);