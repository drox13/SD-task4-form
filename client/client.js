"use strict"

function send() {
    console.log("click")
    var number = {
        "product": document.getElementById("priceId").value,
        "price": document.getElementById("product").value
    }
    var xhr = new window.XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(xhr.response)
            paintList(data);
        }
    }
    xhr.open('POST', 'http://localhost:8001/products', true)
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
    xhr.send(JSON.stringify(number))
}

function paintList(list) {
    var ul = document.querySelector("#list");
    ul.innerHTML = ''
    list.forEach(element => {
        var li = document.createElement("li");
        li.innerHTML = element.product + " " + element.price;
        ul.appendChild(li);
    });
}