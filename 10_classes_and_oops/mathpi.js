// console.log(Math.PI);
// Math.PI = 4;
// console.log(Math.PI)

const descripter = Object.getOwnPropertyDescriptor(Math,"PI");
//console.log(descripter);

const chai = {
    name: "cutting chai",
    price: 15,
    isAvailable: true,

    oderChai: function(){
        console.log(`Chi is not available at this moment`)
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"oderChai"));

Object.defineProperty(chai,'name',{
    writable: false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (const [key,value] of Object.entries(chai)) {
    if(typeof value!=='function'){
        console.log(`${key} : ${value}`)
    }
    
}