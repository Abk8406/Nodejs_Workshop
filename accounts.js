"use strict";
exports.__esModule = true;
//create the sub  module
var express = require("express");
var account = express.Router();
account.get('/', function (req, res) {
    res.status(200).json({ 'Msg': '  Welocome to SBI account  ..!!!' });
});
account.post('/', function (req, res) {
    res.status(200).json({ 'Msg': 'account will add soon ' });
});
module.exports = account;
