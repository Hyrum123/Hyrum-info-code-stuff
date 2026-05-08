document.addEventListener("DOMContentLoaded", function(){
    const kick = new Audio("sounds/sounds/kick.wav");
    const clap = new Audio("sounds/sounds/clap.wav");
    const cowbell = new Audio("sounds/sounds/cowbell.wav");
    const hihat = new Audio("sounds/sounds/hihat.wav");
    const openhat = new Audio("sounds/sounds/openhat.wav");
    const snare = new Audio("sounds/sounds/snare.wav");
    const tom = new Audio("sounds/sounds/tom.wav");
    const yuh = new Audio("sounds/sounds/yuh.wav");

    const kickDiv = document.querySelector("#kick");
    const clapDiv = document.querySelector("#clap");
    const cowbellDiv = document.querySelector("#cowbell");
    const hihatDiv = document.querySelector("#hihat");
    const openhatDiv = document.querySelector("#openhat");
    const snareDiv = document.querySelector("#snare");
    const tomDiv = document.querySelector("#tom");
    const yuhDiv = document.querySelector("#yuh");

    let kickY = 0;
    let clapY = 0;
    let cowbellY = 0;
    let hihatY = 0;
    let openhatY = 0;
    let snareY = 0;
    let tomY = 0;
    let yuhY = 0;

    window.addEventListener("keydown", function(event){
        if(event.key == "a") {
            kick.currentTime = 0.01;
            kick.play();
            kickDiv.classList.add("active");
            kickY += 1;
            document.getElementById("kick").style.transform = "translateY("+kickY+"rem)";
            if (kickY == 10) {
                kickY = 0;
            }
            console.log(kickY);
        } else if(event.key == "s") {
            clap.currentTime = 0.01;
            clap.play();
            clapDiv.classList.add("active");
            clapY += 1;
            document.getElementById("clap").style.transform = "translateY("+clapY+"rem)";
            if (clapY == 10) {
                clapY = 0;
            }
        } else if(event.key == "d") {
            cowbell.currentTime = 0.01;
            cowbell.play();
            cowbellDiv.classList.add("active");
            cowbellY += 1;
            document.getElementById("cowbell").style.transform = "translateY("+cowbellY+"rem)";
            if (cowbellY == 10) {
                cowbellY = 0;
            }
        } else if(event.key == "f") {
            hihat.currentTime = 0.01;
            hihat.play();
            hihatDiv.classList.add("active");
            hihatY += 1;
            document.getElementById("hihat").style.transform = "translateY("+hihatY+"rem)";
            if (hihatY == 10) {
                hihatY = 0;
            }
        } else if(event.key == "j") {
            openhat.currentTime = 0.01;
            openhat.play();
            openhatDiv.classList.add("active");
            openhatY += 1;
            document.getElementById("openhat").style.transform = "translateY("+openhatY+"rem)";
            if (openhatY == 10) {
                openhatY = 0;
            }
        } else if(event.key == "k") {
            snare.currentTime = 0.01;
            snare.play();
            snareDiv.classList.add("active");
            snareY += 1;
            document.getElementById("snare").style.transform = "translateY("+snareY+"rem)";
            if (snareY == 10) {
                snareY = 0;
            }
        } else if(event.key == "l") {
            tom.currentTime = 0.01;
            tom.play();
            tomDiv.classList.add("active");
            tomY += 1;
            document.getElementById("tom").style.transform = "translateY("+tomY+"rem)";
            if (tomY == 10) {
                tomY = 0;
            }
        } else if(event.key == ";") {
            yuh.currentTime = 0.01;
            yuh.play();
            yuhDiv.classList.add("active");
            yuhY += 1;
            document.getElementById("yuh").style.transform = "translateY("+yuhY+"rem)";
            if (yuhY == 10) {
                yuhY = 0;
            }
        }
    })

    window.addEventListener("keyup",function(event){
        if (event.key == "a") {
            kickDiv.classList.remove("active");
        } else if (event.key == "s") {
            clapDiv.classList.remove("active");
        } else if (event.key == "d") {
            cowbellDiv.classList.remove("active");
        } else if (event.key == "f") {
            hihatDiv.classList.remove("active");
        } else if (event.key == "j") {
            openhatDiv.classList.remove("active");
        } else if (event.key == "k") {
            snareDiv.classList.remove("active");
        } else if (event.key == "l") {
            tomDiv.classList.remove("active");
        } else if (event.key == ";") {
            yuhDiv.classList.remove("active");
        }
    })
})
