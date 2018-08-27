// The program prints path trailing the hostname
// Example : www.exmaple.com/sample/url-path
// Output  : /sample/url-path

var http = require('http');

http.createServer(function(req, res){
  res.writeHeader(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(4000);
