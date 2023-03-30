//esto es lo que pasa con hoisting, la variable nameOfDog solo se declara con valor undefined
// var nameOfDog; //undefined
// console.log(nameOfDog);

// var nameOfDog = 'elm';
// console.log(nameOfDog);


// var elmo; //undefined
// function nameOfDog() {
//   console.log(`el mejor perrrito es: ${elmo}`);
// }

nameOfDog()

function nameOfDog() {
  console.log(`el mejor perrrito es: ${elmo}`);
}

var elmo = 'elmo';

nameOfDog();