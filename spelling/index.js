'use strict';

const API_KEY = 'nSeUXENLL1mshxSUeKWujnRlw5bOp1PhxfojsnpEroVKybLJnd';

var request = require('request');

module.exports = function(req, res) {
    var params = req.url.split('/');
    params.shift();
    var resource = params.shift().toLowerCase();
    var sentence = params.shift();

    var options = {
        url: `https://montanaflynn-spellcheck.p.mashape.com/check/?text=${sentence}`,
        headers: {
            'X-Mashape-Key': API_KEY,
            'Accept': 'application/json'
        }
    };

    request(options, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            res.write(JSON.parse(body).suggestion);
            res.end();
        }
    });
};