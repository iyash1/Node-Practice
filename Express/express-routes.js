var express = require('express');
var app = express();

// Define routes
app.route("/").get(function(req, res){
  res.status(200).send("Welcome Page!");
});

app.route("/form").get(function(req, res){
  res.status(200).send("Forms Page!");
});

app.route("/contact").get(function(req, res){
  res.status(200).send("Contact Page!");
});

// When routes other than the ones specified above are requested
// The following responds back with a 404 error code.
app.route('*').get(function(req, res){
  res.status(404).send("404: Page not Found");
});

// Define port to connect to the server
app.listen(4000, function(){
  console.log("Server running on PORT 4000");
});
