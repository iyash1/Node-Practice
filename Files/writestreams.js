var fs = require('fs');
var writeStream;

writeStream = fs.createWriteStream("./sample.txt");
writeStream.write("Hello World");
