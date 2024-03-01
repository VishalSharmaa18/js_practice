
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}
var c = 300;
// console.log(a);
// console.log(b);
console.log(c);

function one (){
    const name = "vishal"

    function two (){
        const status = "Unmarried"
        console.log(name);
    }
   // console.log(status);
    two();
}
one();


if (true) {
 const fullName = "Vishal Sharma"
 if (fullName === "Vishal Sharma") {
    const age = 24;
    console.log(fullName + '', age);
 }
 //console.log(age);
}

//console.log(fullName);

console.log(addOne(23));

function addOne (num){
    return num + 1;
}


let addTwo = function (num) {
    return num + 2
}
console.log(addTwo(32));