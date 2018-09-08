var http = require('http')

// 创建服务
var server = http.createServer(function (req, res) {
  res.writeHead(200, {"Content-type":"text/html;charset=UTF-8"});
  res.end("helloworld")
})

// 开启服务，设置监听端口
server.listen(3000, function () {
  console.log('server run at 3000')
})