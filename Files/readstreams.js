var fs = require('fs');
var readStream;

readStream = fs.createReadStream("./sample.txt");
readStream.on("data", function(data){
  var chunk = data.toString();
  console.log(chunk);
});
