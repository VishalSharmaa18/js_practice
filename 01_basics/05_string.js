let name = "Vishal";
const repoCount = 50

//console.log( name  +  repoName);

console.log(`Hello there! My name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String ('Vishal Shamra')
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('s'));

const anotherString = gameName.slice(1, 4);
console.log(anotherString);

const newString = "    Vishal    "
console.log(newString.trim());

const url = "https://vishal.com/vishal%30sharma";

console.log(url.replace('%30' ,'-'))

