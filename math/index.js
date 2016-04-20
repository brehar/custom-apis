'use strict';

module.exports = function(req, res) {
    var params = req.url.split('/');
    params.shift();
    var resource = params.shift().toLowerCase();
    var op = params.shift().toLowerCase();

    var operand1 = params.shift();
    var operand2 = params.shift();

    switch (op) {
        case 'add':
            var sum = parseFloat(operand1) + parseFloat(operand2);
            res.write(`${sum}\n`);
            res.end();
            break;
        case 'subtract':
            var difference = parseFloat(operand1) - parseFloat(operand2);
            res.write(`${difference}\n`);
            res.end();
            break;
        case 'multiply':
            var product = parseFloat(operand1) * parseFloat(operand2);
            res.write(`${product}\n`);
            res.end();
            break;
        case 'divide':
            if (parseFloat(operand2) === 0) {
                res.write('undefined\n');
            } else {
                var quotient = parseFloat(operand1) / parseFloat(operand2);
                res.write(`${quotient}\n`);
            }
            
            res.end();
            break;
        case 'exponent':
            var result = Math.pow(parseFloat(operand1), parseFloat(operand2));
            res.write(`${result}\n`);
            res.end();
            break;
        default:
            res.statusCode = 404;
            res.write('Not Found');
            res.end('\n');
    }
};