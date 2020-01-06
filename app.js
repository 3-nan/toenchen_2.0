
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

const app = express();

app.engine('ejs', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

app.use(express.static('public'));

module.exports = app;

/* const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === "/test") {
        fs.readFile("index.html", function (error, pgResp) {
            if (error) {
                res.writeHead(404);
                res.write('Content not found.');
            }
            else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(pgResp);
            }
            res.end()
        })
    }
    else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World\n');
    }
});

server.listen(port, hostname, () => {
    console.log('Server running at http://${hostname}:${port}/');
}); */