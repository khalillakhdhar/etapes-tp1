var express = require('express');
var app = express();
app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.send("Bienvenu ?comment apprendre le mean stack? <a href='base'>Web 2.0</a>");
});

app.get('/base', function(req, res) {
    res.setHeader('Content-Type', 'text/HTML');
    res.send("HTML CSS JS SONT LES BASE DU WEB<a href='node'>nodejs</a>!");
});
app.get('/node', function(req, res) {
    res.setHeader('Content-Type', 'text/HTML');
    res.send("node js est un runtime envirement<a href='/etape/1/node'>nodejs</a>!");
});

app.get('/etape/1/node', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Hé, c\'est privé ici !');
});
app.get('/etape/:num/node', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Vous avez atteint le niveau: ' + req.params.num);
});
app.get('/theme/:num/node', function(req, res) { 
    res.render('etape.ejs',{num: req.params.num});
})
app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

 var server = app.listen(8000, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("fait sous l'adresse http://%s:%s", host, port)
 })