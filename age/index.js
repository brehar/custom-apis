'use strict';

var moment = require('moment');

module.exports = function(req, res) {
    var params = req.url.split('/');
    params.shift();
    var resource = params.shift().toLowerCase();
    var birthdate = params.shift();

    var birthdateArr = birthdate.split('-');

    var birthdateObj = {
        days: birthdateArr[2],
        months: birthdateArr[1],
        years: birthdateArr[0]
    };

    var age = moment().subtract(birthdateObj).year();
    
    res.write(`${age}\n`);
    res.end();
};