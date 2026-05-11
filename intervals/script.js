let counter = 10;
const timer = new Audio("./alarm.mp3");

function count() {
    if(counter > 0) {
        counter--;
    } else if(counter == 0) {
        timer.currentTime = 0;
        timer.play();
    }
    document.querySelector('h1').innerHTML = counter;
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = function(){
        setInterval(count, 1000);
        document.querySelector("button").disabled = true;
    }
});
