var express = require('express');
var app = express();
var http = require('http').Server(app);
var mysql = require('mysql');
var port = (process.env.PORT || 7878);//this is needed for heroku
var currentUsers = 0;


app.use(express.static(__dirname + "/public"));

http.listen(port, function(){
	console.log('listening on: ' + port);
});




