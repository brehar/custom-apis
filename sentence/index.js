'use strict';

module.exports = function(req, res) {
    var params = req.url.split('/');
    params.shift();
    var resource = params.shift().toLowerCase();
    var sentence = decodeURIComponent(params.shift());

    var numCharacters = sentence.length;
    var numWords = sentence.split(' ').length;
    var numLetters = sentence.replace(/[^A-Z]/gi, '').length;
    var avgLength = numLetters / numWords;

    var output = {
        words: numWords,
        characters: numCharacters,
        avgLength: avgLength
    };

    res.write(JSON.stringify(output) + '\n');
    res.end();
}