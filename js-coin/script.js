function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function flip() {
    let coin = document.querySelector('button');
    if (getRandomInt(2) == 1) {
        coin.innerHTML = "Heads";
    } else {
        coin.innerHTML = "Tails";
    }
}
