// variables

var a; //declarando
var b = 'b'; //declaramos y asignamos
b = 'bb'; //reasignando
var a = 'a'; //re-declaración

//global scope, cualquier variable, funcion pueden ser llamadas en cualquier documento
var fruit = 'Apple'; //global

function bestFruit() {
  console.log(fruit);
}

bestFruit();

function countries() {
  country = 'Clomobia' //global
  console.log(country);
}

countries();
console.log(country);