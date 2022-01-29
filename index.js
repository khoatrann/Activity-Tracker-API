const http = require("http");
const hostname = 'localhost';
var express = require('express');
const port = 3000;
var app = express();


const server = http.createServer(app);


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});