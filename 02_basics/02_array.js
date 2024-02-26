const marvel_heros = ["Spiderman","Ironman","Thor","Hulk"];
const dc_heros = ["Superman","Batman","Flash"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);

const all_new_heros = [...marvel_heros,...dc_heros];
// console.log(all_new_heros);

const another_new_array = [1,2,3,[4,5,6],7,[8,9,[6,7]]];
// console.log(another_new_array);

// const reusable_array = another_new_array.flat(Infinity);
// console.log(reusable_array);

console.log(Array.isArray(["Vishal","Kushal"]));
console.log(Array.from("Vishal"));
console.log(Array.from({name : "Vishal"})); //Intresting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));

