'use strict';

var md5 = require('md5');

module.exports = function(req, res) {
    var params = req.url.split('/');
    params.shift();
    var resource = params.shift().toLowerCase();
    var email = params.shift();

    res.write(md5(email));
    res.end();
};