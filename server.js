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
    {"product": "producto prueba", "price": 20},
];
/*
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    //res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    
    res.header("Access-Control-Allow-Headers", 'content-type:application/json');
    next();
});
*/

app.get('/', function (req, res) {
    res.sendFile('index.html', { root: __dirname });
})

app.post('/element', function (req, res) {
    console.log(req.body.price);
    var product = {"product:": req.body.product, "price": req.body.price};
    productList.push(product);
    res.send(productList);
})

app.listen(port, () => {
    console.log(`Server working on http://localhost:${port}`);
});