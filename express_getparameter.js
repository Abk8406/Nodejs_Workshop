"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.get('/login/uname/:uname/upaw/:upaw', function (req, res) {
    if (req.params.uname === 'admin' && req.params.upaw === 'admin') {
        res.status(200).json({ 'login': 'successfuly ..' });
    }
    else {
        res.status(200).json({ 'login': 'Faild ..' });
    }
});
app.listen(8080, function () {
    console.log("server started..");
});
