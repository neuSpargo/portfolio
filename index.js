var express = require('express'),
pug = require('pug'),
path = require('path'),
var app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname + '/public')));
app.use(express.static(path.join(__dirname + '/public/images')));

app.get('/', function(req, res) {
    res.render('home');
});

app.listen(3000);