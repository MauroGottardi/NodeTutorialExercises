var fs = require('fs');
var path = require('path');

exports.list = function (dirpath, extension, callback) {
 
  
  var selectedExtension = fs.readdir(dirpath, function(err, arrayList){
    if (err) {
      return callback(err)
    }
    selectedExtension = arrayList.filter(function(elem){
      if(String(path.extname(elem)) === String("." + extension)){
        return true;
      }
    });
    callback(null, selectedExtension)
  });
  
}
