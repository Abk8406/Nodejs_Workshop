"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.get('/login', function (req, res) {
    if (req.query.uname === 'admin' && req.query.upwd === 'admin') {
        res.status(200).json({ 'login': 'successfuly ..' });
    }
    else {
        res.status(200).json({ 'login': 'Faild ..' });
    }
});
app.listen(8080, function () {
    console.log("server started..");
});
// http://localhost:8080/login?uname=admin&upwd=admin
