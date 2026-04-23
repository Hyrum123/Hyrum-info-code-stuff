let i = 0;

function count() {
    i++;
    let count = document.querySelector('h1');
    count.innerHTML = i;
    console.log(i);
}
