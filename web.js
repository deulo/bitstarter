var express = require('express');

var app = express.createServer(express.logger());
var result;
var fs = require('fs');

fs.readFileSync('index.html', function (err, data) {
if(err) throw err;
var bufer = data;
result = buffer.toString();
});


app.get('/', function(request, response) {
  response.send(result);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
