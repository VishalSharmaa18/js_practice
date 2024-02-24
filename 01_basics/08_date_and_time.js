// // const currentDate = new Date();
// // // console.log(currentDate);
// // // console.log(currentDate.getDate());
// // // console.log(currentDate.getDay());
// // // console.log(currentDate.toDateString());
// // console.log(currentDate.toJSON());
// // console.log(currentDate.toLocaleDateString());
// // console.log(typeof(currentDate));

//  const newDate = new Date(2024, 1, 24);
//  console.log(newDate.getTime());

// const currentDate = new Date();
// console.log(currentDate.getUTCDate() + 7);

// const TimeStamp = Date.now();
// console.log(TimeStamp);

const nowDate = new Date();

console.log(nowDate.getTime());
console.log(nowDate.getHours());

  nowDate.toLocaleString('default',{
   weekday: "long"
  })