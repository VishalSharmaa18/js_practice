// const myNums = [1,2,3,4,5,6,7,8,9,10];
// console.log(myNums.reduce((acc,currVal)=>acc+currVal,0));

// const myNums = [1,2,3,4,5,6,7,8,9,10];
// myNums.reduce(function(acc,currVal){
//     console.log(`acc value : ${acc} and currVal calue : ${currVal}`)
//     return acc + currVal;
// },0)

const shoopingCart = [
    {
        itemName : "Cricket-Bat",
        price : 4999
    },
    {
        itemName : "Cricket-Ball",
        price : 1999
    },
    {
        itemName : "Cricket-Kit",
        price : 3999
    },
    {
        itemName : "Cricket-dress",
        price : 2499
    }
]

  const total = shoopingCart.reduce((acc,item)=>acc+item.price,0)
  console.log(total);