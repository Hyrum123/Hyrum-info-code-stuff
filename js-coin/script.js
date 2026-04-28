function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function flip() {
    let coin = document.querySelector('img');
    if (getRandomInt(2) == 1) {
        coin.src = "https://preservegold.com/wp-content/uploads/2025/03/Morgan-Silver-Dollar-front.webp"
        console.log("Heads");
    } else {
        coin.src = "https://m.media-amazon.com/images/I/81KVepxfQhL._AC_UF894,1000_QL80_.jpg"
        console.log("Tails");
    }
}
