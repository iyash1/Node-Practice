var http = require('http');

//Export the custom module.
var add = require('./custom_module.js');

http.createServer(function(req, res){
  res.writeHeader(200, {'Content-Type':'text/html'});
  res.write("The sum of 2 + 2 = "+add.AddNumber(2,2));
  res.end();
}).listen(4000);
