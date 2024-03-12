const myObject = {
    js : 'javascript',
    rb : 'Ruby',
    cp : 'C plus',
    swift : 'swift by apple'
}

for (const key in myObject) {
 //  console.log(`${key} is shortcut for ${myObject[key]}`);
}

const programming = ["JS","CPP","RUBY","PY"]  

for (const key in programming) {
  //      console.log(programming[key]); 
}

// const map1 = new Map();
//                               // No itterations on maps in forin loop
// map1.set('IN','India')
// map1.set('USA','United States of America');
// map1.set('UAE','United Arab Emeriates');

// for (const [key] in map1) {
//    console.log(key);
// }

