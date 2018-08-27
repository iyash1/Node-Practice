var http = require('http');

http.createServer(function(req, res){
  res.writeHeader(200, {'Content-Type': 'text/html'});
  res.end('My first Node.js app - Hello World!');
}).listen(4000);

/*
Module : http
- allows transfer of data over HTTP protocol
- creates server that can listen over ports
- gives response back to clients
- reads url
- adds attributes to headers
- splits the query strings
*/
