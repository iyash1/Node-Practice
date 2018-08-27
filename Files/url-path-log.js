var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
  fs.appendFile('serverLogRequest.txt', req.url+"\n", (err) => {
    if (err) throw err;
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(req.url);
    res.end();
  });
}).listen(4000);
