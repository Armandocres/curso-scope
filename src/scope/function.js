//las variables delcaras dentro de una función solo serán accesibles dentro de la misma y funciones anidadas

function greeting() {
  let userName = 'Ana';
  console.log(userName);

  if (userName === 'Ana') {
    console.log(`hello ${userName}`);
  }
}

greeting();
// console.log(userName);