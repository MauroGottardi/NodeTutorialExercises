var fs = require('fs');
var path = process.argv[2];

var file = fs.readFileSync(path).toString();
file = file.split('\n');
var count = 0;
file.forEach(function(elem){
  count++;
});
count --;
console.log(count);