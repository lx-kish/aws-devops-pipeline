var port = process.env.PORT || 3000,
    http = require('http'),
    fs = require('fs'),
    html = fs.readFileSync('index.html'),
    convert = require('./js/converter'),
    tmp = './tmp/app.log';

var log = function (entry) {
    fs.appendFileSync(tmp, new Date().toISOString() + ' - ' + entry + '\n');
};

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        var body = '';

        req.on('data', function (chunk) {
            if (chunk) {
                body += chunk;
            }
        });

        req.on('end', function () {
            if (req.url === '/') {
                if (body) {
                    log('Received message: ' + body);
                    obj = JSON.parse(body);
                    body = convert(obj.value);
                } else {
                    body = JSON.stringify({ "error": 'bad request - ' + req });
                }
            } else if (req.url = '/scheduled') {
                log('Received task ' + req.headers['x-aws-sqsd-taskname'] + ' scheduled at ' + req.headers['x-aws-sqsd-scheduled-at']);
            } else {

            }
            res.writeHead(200, 'OK', { 'Content-Type': 'text/plain' });
            res.write(body);
            res.end();
        });
    } else {
        res.writeHead(200);
        res.write(html);
        res.end();
    }
});

// Listen on port, IP defaults to 127.0.0.1
server.listen(port);

// Put a friendly message on the terminal
console.log('Server running at http://127.0.0.1:' + port + '/');
