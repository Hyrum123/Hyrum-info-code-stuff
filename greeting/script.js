document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("form").onsubmit = function() {
        let name = document.querySelector("#name").value;
        console.log("Hi " + name);

        document.querySelector("h1").innerHTML = "Hi " + name;

        return false; //Prevents website from loading
     }
});

