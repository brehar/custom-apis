'use strict';

var request = require('request');

module.exports = function(req, res) {
    var params = req.url.split('/');
    params.shift();
    var resource = params.shift().toLowerCase();
    var sentence = params.shift();

    request(`http://www.purgomalum.com/service/json?text=${sentence}`, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            res.write(JSON.parse(body).result + '\n');
            res.end();
        }
    });
};