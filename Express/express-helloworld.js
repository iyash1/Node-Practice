var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send("Hello World");
});

app.get('/hi', function(req, res){
  res.send("Hi World");
});

app.get('/welcome', function(req, res){
  res.send("Welcome to my World");
});

app.route('/node').get(function(req, res){
  res.send("Node tutorial");
});

var server = app.listen(4000, function(){});

/*
Module : express
- web application server framework built on node
- specifically designed for building single-, multi-page & hybrid web apps.
- standard server framework for node
*/
