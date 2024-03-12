const sports = ["Cricket","Football","Hockey","Basketball"];

// sports.forEach(function (item) {
// console.log(item);
// })

// sports.forEach(element => {
//     console.log(element);
// });

function printMe(list) {
    console.log(list);
}

sports.forEach(printMe)

sports.forEach((element,index,arr)=>{
    console.log(element,index,arr);
}  
)