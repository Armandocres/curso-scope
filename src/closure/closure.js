function greeting() {
  let userName = 'Armando';

  function displayUsername() {
    return `hola ${userName}`;
  }

  return displayUsername;
}

const g = greeting();
console.log(g); //retornando la funcion
console.log(g()); //entrega el valor