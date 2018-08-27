var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res){
  var q = url.parse(req.url, true).query;
  var year = q.year;
  var month = q.month;
  var save = year+" "+month+"\n"
  fs.appendFile('serverQueryLogFile.txt', save, function(err){
    if (err) throw err;
    res.writeHeader(200, {'Content-Type': 'text/plain'});
    res.write(save);
    res.end();
  })

}).listen(4000);
