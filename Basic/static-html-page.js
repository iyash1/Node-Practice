var http = require('http');
var fs = require('fs');

// Create a server to listen and serve requests.
http.createServer(function(req, res){
  // Read the file from the given path
  // If found, execute callback and send it back as response.
  fs.readFile("sample.html", function(err, data){
    // If no page is found, send code 404
   if(err){
      res.writeHead(404);
      res.write("Not Found!");
   }
   else{
     // If file found, send it back
      res.writeHead(200, {'Content-Type': contentType});
      res.write(data);
   }
   res.end();
});
}).listen(4000);
