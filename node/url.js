var http = require('http')
var url = require('url')

// 创建服务
var server = http.createServer(function (req, res) {
  // url.parse可以将一个完整的URL分为很多部分，例如：host，port，pathname，path，query
  var pathname = url.parse(req.url).pathname;
  var query = url.parse(req.url, true).query;
  console.log(pathname);
  console.log(query);
  // res.writeHead(200, {"Content-type":"text/html;charset=UTF-8"});
  res.end("helloworld")
})

// 开启服务，设置监听端口
server.listen(3000, function () {
  console.log('server run at 3000')
})