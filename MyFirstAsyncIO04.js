var fs = require('fs');
var path = process.argv[2];

var file = fs.readFile(path, 'utf8', function(err, data){
	var lines = data.split('\n').length -1;
	console.log(lines);
});