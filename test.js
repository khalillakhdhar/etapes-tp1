var express = require('express');
var app = express();
app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.send("Bienvenu à express");
});
var server = app.listen(8000, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("fait sous l'adresse http://%s:%s", host, port)
 })