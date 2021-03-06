var express = require('express');
var app = express();
var books = require('./api/books');
var bodyParser = require('body-parser');

app.use(bodyParser());

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/books', books.listAll);

app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});