var mysql = require('mysql');
var fs = require('fs');
var db_config = require('./config.js')();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: db_config.db_password,
    port: '8889',
    database: 'media_aggregator'
});

connection.connect(function(err) {
    if(err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
});

var models_path = __dirname + '/../server/models';
fs.readdirSync(models_path).forEach(function(file) {
    if(file.indexOf('.js') > 0) {
        require(models_path + '/' + file);
    }
});
