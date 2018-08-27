var express = require('express');
var app = express();

app.get('/about', function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("This a sample about page built on Node.js");
  res.end();
});

app.get('/contact', function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("This a sample contact page built on Node.js");
  res.end();
});

// The below function returns the 404 Error when there is no matching route from the user!
app.get('*', function(req, res){
  res.status(404).send("ERROR 404: Page not Found!");
});

var server = app.listen(4000, function(){
  console.log("Server Listening on PORT 4000. . .");
});
