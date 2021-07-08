"use strict"

const express = require('express');
const app = express();
const port = 5000;
var cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

var productList = [
    {"product": "producto prueba", "price": 20}
];

app.get('/', function (req, res) {
    res.sendFile('index.html', { root: __dirname });
})

app.post('/element', function (req, res) {
    console.log(req);
    var product = {"product:": req.body.product, "price": parseInt(req.body.price) };
    productList.push(product);
    res.send(productList);
})

app.listen(port, () => {
    console.log(`Server working on http://localhost:${port}`);
});