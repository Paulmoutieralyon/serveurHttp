
var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index.ejs');
});

app.get('/about', function(req, res) {
    res.render('about.ejs');
});

app.listen(3000);
