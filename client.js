"use strict"
var button = document.querySelector("#btn");
button.addEventListener("click", sendJSON, true);

var data = document.querySelector("#data");
function paintList(){
    let xhr = new XMLHttpRequest();
    let url = "localhost:5000/";
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var p = data.appendChild("p");
            p.innerHTML = this.responseText;
        }
    };
    xhr.open("GET", url, true);
}

function sendJSON(){
    console.log("se oprimio btn");
    var product = document.querySelector("#product").value;
    var price = document.querySelector("#priceId").value;

    let xhr = new XMLHttpRequest();
    let url = "localhost:5000/";
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(JSON.parse(this.responseText));
        }
    };
    xhr.open("POST", url, true);
    var data = JSON.stringify({ "product": product, "price": price });
    xhr.send(data);
}