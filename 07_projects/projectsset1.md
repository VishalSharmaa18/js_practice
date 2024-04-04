# Projects related to Dom

## Project Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution

## Project 1
 
````` Javascript
  console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});

// 2nd Method by switch statement
  
  //2nd method by switch statement

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

function changeColor(color) {
  switch (color) {
    case 'grey':
      body.style.backgroundColor = 'grey';
      break;
    case 'white':
      body.style.backgroundColor = 'white';
      break;
    case 'blue':
      body.style.backgroundColor = 'red';
      break;
    case 'yellow':
      body.style.backgroundColor = 'yellow';
      break;
    default:
      console.log('invalid color');
  }
}

buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    changeColor(button.id);
  });
});

//3rd method
const allButtons = document.querySelectorAll(".button");
const body = document.querySelector("body");

allButtons.forEach(function(button){
    button.addEventListener('mouseover', function(event){
        body.style.backgroundColor = button.id;
    })
})

