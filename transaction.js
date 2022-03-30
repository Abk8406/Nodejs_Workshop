"use strict";
exports.__esModule = true;
//create the sub  module
var express = require("express");
var transactions = express.Router();
transactions.get('/', function (req, res) {
    res.status(200).json({ 'Msg': ' Transaction Soon ..!!!' });
});
transactions.get('/getproducts', function (req, res) {
    res.status(200).json({ 'Msg': ' Welcome to Product Shop ..!!!' });
});
exports["default"] = transactions;
