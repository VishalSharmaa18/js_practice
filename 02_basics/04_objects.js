const newUser  = new Object ()
console.log(newUser);

const tinderUser = {};

// tinderUser.id = "vishal123";
// tinderUser.email = "vishal@google.com";
// console.log(tinderUser.email);

const regularUser = {
    email: "Vishal@google.com",
    fullname: {
        userName:{
            firstname: "Vishal",
            lastname: "sharma"
        }
    }
}
// console.log(regularUser.fullname.userName.firstname);

const obj1 = {1: "ab",2: "zx"};
const obj2 = {3: "as",4: "mn"};

// const obj3 = {obj1,obj2}
// console.log(obj3);

console.log(Object.assign({} ,obj1,obj2));

const obj3 = {...obj1,...obj2}
console.log(obj3);

