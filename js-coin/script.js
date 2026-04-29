function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function flip(side) {
    let coin = document.querySelector('img');
    let coinSide = document.querySelector('.side');
    if (getRandomInt(2) == 1) {
        coin.src = "https://preservegold.com/wp-content/uploads/2025/03/Morgan-Silver-Dollar-front.webp"
        console.log("Heads");
        if(side == "Heads") {
            coinSide.innerHTML = "Correct!";
        } else if (side == "Tails") {
            coinSide.innerHTML = "Wrong";
        } else {
            coinSide.innerHTML = "Your guess is:"
        }
    } else {
        coin.src = "https://m.media-amazon.com/images/I/81KVepxfQhL._AC_UF894,1000_QL80_.jpg"
        console.log("Tails");
        if(side == "Heads") {
            coinSide.innerHTML = "Wrong";
        } else if (side == "Tails") {
            coinSide.innerHTML = "Correct!";
        } else {
            coinSide.innerHTML = "Your guess is:"
        }
    }
}
