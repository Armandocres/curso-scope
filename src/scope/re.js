var firstName; // se le asigna undefined
firstName = 'Armando';

console.log(firstName);

var lastName = 'Cruz'; //declarar / asignar
lastName = 'Guillermo'; // re-asignar
console.log(lastName);

var secondName = 'Jose'; //declarando / asignando
var secondName = 'Ana'; //re-asignar
console.log(secondName);

//let
let fruit = 'Apple'; // declarar / asignar;
fruit = 'kiwi'; //reasignar

// let fruit = 'banana'; // re-declarar no es permitido

//const
const animal = 'Dog'; //declara /asigna
// animal = 'Cat'; //re-asignar no es permitido
// const animal = 'Snake'; // no se puede re-declarar
console.log(animal);

const vehicles = []; //haciendo referencia a la constante
vehicles.push('car');
console.log(vehicles);
vehicles.pop();
console.log(vehicles);