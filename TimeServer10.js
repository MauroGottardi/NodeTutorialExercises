var net = require('net')
var server = net.createServer(function (res) {
  var now = new Date();
  var arrData = [];
  arrData.push(now.getFullYear());
  arrData.push(now.getMonth() + 1);
  arrData.push(now.getDate());
  arrData.push(now.getHours());
  arrData.push(now.getMinutes());

  arrData.forEach(function(elem, index){
    if(elem < 10){
      elem = '0' + elem;
      arrData[index] = elem;
    }
  })

  var string = arrData[0] + "-" + arrData[1] + "-" + arrData[2] + " " + arrData[3] + ":" + arrData[4] + "\n";
  res.end(string);
});
server.listen(process.argv[2])
