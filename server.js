var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './static'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
   res.render('index');
});

app.listen(8000);
