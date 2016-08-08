var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;	//PORT=8080 node app.js
var msg = process.argv.[2] || 'Hello man';	// node app.js 'Hello world!'

app.get( '/', function (req, res) {
	res.send(msg);
});

app.listen(3000, function() {
	console.log('Listening in 3000');
});