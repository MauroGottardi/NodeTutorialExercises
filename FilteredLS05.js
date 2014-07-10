var fs = require('fs');
var path = require('path');
var dirpath = process.argv[2];
var extension = process.argv[3];

var x = fs.readdir(dirpath, function(err, data){
  data.forEach(function(elem){
    if(String(path.extname(elem)) === String("." + extension)){
      console.log(elem);
    }
  });
});