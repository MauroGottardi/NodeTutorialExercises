var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  var requestUrl = url.parse(req.url, true);
  var urlpath = requestUrl.pathname;
  var date = new Date(requestUrl.query['iso']);
  //console.log(urlpath)
  if(urlpath == '/api/parsetime'){
    var json = {
      "hour": date.getHours(),
      "minute": date.getMinutes(),
      "second": date.getSeconds()
    }
    res.end(JSON.stringify(json));
  } else if (urlpath == '/api/unixtime'){
    var json = { "unixtime": date.getTime() }
    res.end(JSON.stringify(json));
  }
});

server.listen(process.argv[2]);
