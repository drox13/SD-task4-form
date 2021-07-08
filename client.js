"use strict"
var button = document.querySelector("#btn");
button.addEventListener("click", send, true);

function send(){
    let xhr = new XMLHttpRequest();
    let url = "localhost:5000/";
    
    xhr.open("POST", url, true);
    xhr.send();
}