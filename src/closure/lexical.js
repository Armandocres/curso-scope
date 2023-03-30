const myGlobal = 0;

function myFunction() {
  const myNUmber = 1;

  console.log(myGlobal);

  function parent() { //funcion interna
    const inner = 2;
    console.log(myNUmber);
    console.log(myGlobal);

    function child() {
      console.log(inner);
      console.log(myNUmber);
      console.log(myGlobal);
    }
    return child();
  }

  return parent();
}

myFunction();