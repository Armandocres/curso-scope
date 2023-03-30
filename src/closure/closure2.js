// function moneyBox(coins) {
//   let saveCoins = 0;

//   saveCoins += coins;

//   console.log(`tienes: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(1);
// moneyBox(2);

function myMoneyBox() {
  let saveCoins = 0;

  function countCoins(coins) {
    saveCoins += coins;

    console.log(`MOney box: $${saveCoins}`);
  }

  return countCoins;
}

const moneyBox = myMoneyBox();
moneyBox(3);
moneyBox(4);
moneyBox(5);