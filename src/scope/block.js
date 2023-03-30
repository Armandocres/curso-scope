//Nace en ecmas6 y se refiere a que variables deifnidas dentro de un bloque solo son usadas dentro de ese bloque

function fruits() {
  if (true) {
    var fruit = 'Apple'; //function scope
    let fruit2 = 'kiwi'; // block scope
    const fruit3 = 'Banana'; //block scope
    console.log(fruit2);
    console.log(fruit3);
  }

  console.log(fruit);
}

fruits();