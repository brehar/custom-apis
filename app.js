'use strict';

const PORT = process.env.PORT || 3000;

var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
    var params = req.url.split('/');
    params.shift();
    var resource = params.shift().toLowerCase();

    switch (resource) {
        case 'math':
            require('./math')(req, res);
            break;
        case 'gravatar':
            require('./gravatar')(req, res);
            break;
        case 'sentence':
            require('./sentence')(req, res);
            break;
        case 'age':
            require('./age')(req, res);
            break;
        case 'magic':
            require('./magic')(req, res);
            break;
        case 'profanity':
            require('./profanity')(req, res);
            break;
        case 'spelling':
            require('./spelling')(req, res);
            break;
        case '':
            var data = fs.readFileSync('./public/index.html');
            res.end(data.toString());
            break;
        default:
            fs.readFile(`./public/${resource}`, (err, data) => {
                if (err) {
                    res.statusCode = 404;
                    res.write('Not Found');
                    res.end('\n');
                } else {
                    res.end(data.toString());
                }
            });
    }
});

server.listen(PORT, (err) => {
    if (err) return console.log('error!:', err);

    console.log(`Node server listening on port ${PORT}`);
});