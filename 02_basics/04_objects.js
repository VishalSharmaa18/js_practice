const newUser  = new Object ()
console.log(newUser);

const tinderUser = {};

tinderUser.id = "vishal123";
 tinderUser.email = "vishal@google.com";
 tinderUser.isLoggedIn = "false";
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

// const oldUser =[
//     {
//         id: "abc123",
//         email : "a@google.com"
//     },
//     {
//         id: "xyz123",
//         email : "x@google.com"
//     },
//     {

//     }
// ]
//       console.log(oldUser[0]);
//       console.log(typeof oldUser);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    courseName : "JavaScript For Begginers",
    CourseInstructor : "Vishal Sharma",
    coursePrice : 999
}

    //       course.CourseInstructor

  const {courseName : LanguageName} = course   //Destrucuring of object in js
  //console.log(courseName);
  console.log(LanguageName);


//   {  //json
//     "name" : "Vishal",
//     "age" : 23,
//     "email": "Vishal@google.com"   
//   }
  



