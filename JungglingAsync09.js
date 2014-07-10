var http = require('http');
var arr = [];
var strings = [];
var i = 0;
var paths = [process.argv[2], process.argv[3], process.argv[4]]


function waitPath(path){
  http.get(path, function(response){
    response.setEncoding('utf8');
    response.on("data", function (data) {
      arr.push(data);
    });
    response.on("end", function (data) {
      var string = arr.join("");
      strings.push(string);
      arr = [];
      string = '';
      i ++;
      if (i<=2){
        waitPath(paths[i]);
      } else {
        strings.forEach(function(elem){
          console.log(elem);
        });
      }
    });
  });
};
waitPath(paths[i]);
