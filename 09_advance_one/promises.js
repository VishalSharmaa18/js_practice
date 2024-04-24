const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    //DB calls,cryptography,network
    setTimeout(function(){
        console.log("Async task is completed");
        resolve();
    },1000)
});

promiseOne.then(()=>{console.log("promise consumed")});

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async 2 completed");
        resolve();
    },1000)
}).then(function(){
    console.log("Task 2 completed")
});

const promiseThree = new Promise(function(resolve,reject){
   setTimeout(() => {
    resolve({Username: "Vishal",email:"vishal@gmail.com"});
   }, 1000);
});
promiseThree.then(function(user){
console.log(user)
});

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        const error = true;
        if(!error){
           resolve({username:"Vishal",password:"abc"})
        }else{
            reject('Error : Something went wrong')
        }
    }, 1000);
});

promiseFour.then((user)=>{
console.log(user)
return user.username
}).then((myuserName)=>{
    console.log(myuserName)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("the promise is either resolved or rejected")
});
