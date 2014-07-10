var MIMM = require('./MIMM');
var dirpath = process.argv[2];
var extension = process.argv[3];


var asd = MIMM(dirpath, extension, function(err, data){
  data.forEach(function(elem){
    console.log(elem);
  })
});