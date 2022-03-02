const express = require('express');
const entryroutes = require('./routes/entry');
const searchroutes = require('./routes/search');
const http = require('http');
const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const listener = app.listen(port, hostname, () => {
    console.log(`server running on http://${hostname}:${port}`);
});

app.use('/', entryroutes, searchroutes);