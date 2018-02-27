var express = require('express');
var app = express();
pug = require('pug');
path = require('path');

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname + '/public')));

app.get('/', function(req, res) {
    res.render('home');
});
app.get('/:page', function(req, res) {
    res.render(req.params.page);
});

// app.get('/', function(req, res) {
//     res.render('home');
// });
// app.get('/gallery', function(req, res) {
//     res.render('gallery');
// });
// app.get('/shiny', function(req, res) {
//     res.render('shiny');
// });
// app.get('/isaac', function(req, res) {
//     res.render('isaac');
// });
// app.get('/vseeks', function(req, res) {
//     res.render('vseeks');
// });
// app.get('/framework', function(req, res) {
//     res.render('framework');
// });

app.listen(process.env.PORT||3000);