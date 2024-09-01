const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('demo.html', 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500);
            return res.end('Error loading index.html');
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
});

server.listen(1003);