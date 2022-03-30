"use strict";
// import express module
exports.__esModule = true;
var express = require("express");
// its return a object ..
var app = express();
//app object used to develop the rest services
// ex.. Get , Post, Put,Delete .. etc 
// get Request 
app.get("/getcustomer", function (req, res) {
    res.status(200).json({ 'Msg': 'Welcome to typescript with Node.js' });
});
//assign the port no 
app.listen(8080, function () {
    console.log("serve stated successfully..");
});
