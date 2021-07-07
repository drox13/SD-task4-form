"use strict"

const express = require('express');
const app = express();
const port = 5000;

const bodyParser = require('body-parser');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

var productList = [];

app.post('/form', (req,res)=>{
    //productList.push(req.body.name);
    res.send("conecto");
});

app.listen(port, () => {
    console.log(`Server working on http://localhost:${port}`);
});