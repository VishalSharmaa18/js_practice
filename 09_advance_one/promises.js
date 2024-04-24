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
    },2000)
}).then(function(){
    console.log("Task 2 completed")
})