// let myName = "vishal     ";
// let channelName = "driftwithvishal  "

// console.log(myName.truelength);
// console.log(channelName.trim()-length);

const myHeros = ["Virat Kohli","Rohit Sharma","Chris Gayle"];

const herosNickName = {
    kohli : "Run-Machine",
    rohit : "Hitman",
    gayle : "Universal-Boss",

    getNickName :function(){
        console.log(`Chirs Gayle NickName is ${this.gayle}`)
    }
};

Object.prototype.heyHeros = function(){
    console.log("Hey Heros present in all")
};

herosNickName.heyHeros();
myHeros.heyHeros();

Array.prototype.heyArray = function(){
    console.log("Hey it will partially present in all")
}

myHeros.heyArray();
// herosNickName.heyArray(); it will not present in object

//inheritance

const User = {
userName : "Vishal Sharma",
email : 'VS@home.com'
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
makeAssignment : 'Js assignment',
fullTime : true,
__proto__ : TeachingSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher);

let anotherUserName = "js With Vishal   ";

String.prototype.truelength = function(){
    console.log(`${this}`)
    console.log(`True Length is : ${this.trim().length}`)
}
anotherUserName.truelength();

"Vishal".truelength();




