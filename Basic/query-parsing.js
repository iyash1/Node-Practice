// When a query is passed through the URL, the program fetches the
// assigned parameters and prints them.
// Example : http://localhost:4000/?year=2018&month=August
// Output  : Born on August 2018

var http = require('http');
var url  = require('url');

http.createServer(function(req, res){
  res.writeHeader(200, {'Content-Type':'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = "Born on "+q.month+" "+q.year;
  res.end(txt);
}).listen(4000);

/*
Module : url
- Used to parse the url queries
- queries are preceeded by a ? sign
- arguments are separated by & symbol
*/
