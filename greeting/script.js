document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("form").onsubmit = function() {

        let name = document.querySelector("#name").value;
        console.log("Hi " + name);
        document.querySelector("#inputName").innerHTML = "Hi " + name;

        let now = new Date();
        let hour = now.getHours();
        if(hour < 12) {
            document.querySelector("#hour").innerHTML = ("Good morning!");
        } else if(hour < 18) {
            document.querySelector("#hour").innerHTML = ("Good afternoon!");
        } else {
            document.querySelector("#hour").innerHTML = ("Good evening!");
        }

        let day = now.getDay();
        if(day = 0) {
            document.querySelector("#day").innerHTML = ("Today is Sunday");
            document.querySelector("#friday").innerHTML = ("Just enjoy your weekend");
        } else if(day = 1) {
            document.querySelector("#day").innerHTML = ("Today is Monday");
            document.querySelector("#friday").innerHTML = ("Not friday, yet!");
        } else if(day = 2) {
            document.querySelector("#day").innerHTML = ("Today is Tuesday");
            document.querySelector("#friday").innerHTML = ("Not friday, yet!");
        } else if(day = 3) {
            document.querySelector("#day").innerHTML = ("Today is Wednesday");
            document.querySelector("#friday").innerHTML = ("Not friday, yet!");
        } else if(day = 4) {
            document.querySelector("#day").innerHTML = ("Today is Thursday");
            document.querySelector("#friday").innerHTML = ("Not friday, yet!");
        } else if(day = 5) {
            document.querySelector("#day").innerHTML = ("Today is Friday");
            document.querySelector("#friday").innerHTML = ("Finally Friday!");
        } else if(day = 6) {
            document.querySelector("#day").innerHTML = ("Today is Saturday");
            document.querySelector("#friday").innerHTML = ("Just enjoy your weekend");
        }

        return false; //Prevents website from loading
     }
});
