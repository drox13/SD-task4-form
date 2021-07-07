"use strict"

window.addEventListener("load", function(){
    console.log("dom cargado");

    var form = this.document.querySelector("#form");
    form.addEventListener("submit", function () {
        console.log("sumit capturado");

        var product = document.querySelector("#product").value;
        var price = document.querySelector("#priceId").value;

        console.log(product, price);
    });
});