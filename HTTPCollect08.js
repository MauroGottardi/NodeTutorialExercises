var http = require('http');
var string = '';

http.get(process.argv[2], function(response){
  response.setEncoding('utf8');
  response.on("data", function (data) {
    string = string + String(data);
  });
  response.on("end", function (data) {
    console.log(string.length);
    console.log(string);
  });
})