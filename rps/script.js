function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function rps(rpsChoice) {
  let printResult = document.querySelector('h2');
  let choice = getRandomInt(3);
  if (rpsChoice == "rock") {
    if (choice == 2) {
      printResult.innerHTML = "The robot guessed rock. You tied man, try again";
    } else if (choice == 1) {
      printResult.innerHTML = "The robot guessed paper. You done lost, fool";
    } else {
      printResult.innerHTML = "The robot guessed scissors. You won bro!";
    }
  }
  if (rpsChoice == "paper") {
    if (choice == 2) {
      printResult.innerHTML = "The robot guessed rock. You won bro!";
    } else if (choice == 1) {
      printResult.innerHTML = "The robot guessed paper. You tied man, try again";
    } else {
      printResult.innerHTML = "The robot guessed scissors. You done lost, fool";
    }
  }
  if (rpsChoice == "scissors") {
    if (choice == 2) {
      printResult.innerHTML = "The robot guessed rock. You done lost, fool";
    } else if (choice == 1) {
      printResult.innerHTML = "The robot guessed paper. You won bro!";
    } else {
      printResult.innerHTML = "The robot guessed scissors. You tied man, try again";
    }
  }
}
