var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './static'));
app.set('view engine', 'ejs');

require('./config/mysql.js');
require('./config/routes.js')(app);

app.listen(8000);
