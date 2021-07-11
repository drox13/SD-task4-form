"use strict"

const express = require('express');
const app = express();
const port = 8001;
var cors = require('cors');
app.use(cors());
app.use(express.static('client'));

const bodyParser = require('body-parser');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

var productList = [
    {"product": "producto prueba", "price": 20}
];

/*
app.get('/', function (req, res) {
    res.sendFile('index.html', { root: __dirname });
})

app.get('/products', function (req, res) {
    res.send(productList);
})
*/
app.post('/products', function (req, res) {
    console.log(req.body);
    
    var newProduct = {"product": req.body.product, "price": req.body.price};
    productList.push(newProduct);
    res.end(JSON.stringify(productList));
})

app.listen(port, () => {
    console.log(`Server working on http://localhost:${port}`);
});