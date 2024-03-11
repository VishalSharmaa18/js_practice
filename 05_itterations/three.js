// for of

// ["", "", ""]
// [{}, {}, {}]

// const myArr = [1,2,3,4,5,6];

// for (const value of myArr) {
//    // console.log(value);
// }

const fullName = "Vishal-Sharma"

for (const values of fullName) {
   // console.log(`Each Character is ${values}`);
}

//Maps

const map1 = new Map();

map1.set('IN','India')
map1.set('USA','United States of America');
map1.set('UAE','United Arab Emeriates');

  // console.log(map1);

//   for (const [key,value] of map1) {
//     console.log(key,':-',value);
//   }

  const myGames = {
    game1 : "NFS",
    game2 : "GTA",
    game3 : "EA Sports", 
  }
                                        // Not working means not iterable
  for (const [key,value] of myGames) {   
    console.log(key,':-',value);
  }