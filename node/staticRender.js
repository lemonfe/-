var http = require('http');
var fs = require('fs');

// 创建服务
var server = http.createServer(function (req, res) {
  if (req.url === '/test1') {
    fs.readFile('./test1.html', function (err, data) {
      res.writeHead(200, {"Content-type":"text/html;charset=UTF8"});
      res.end(data);
    })
  }else if (req.url === '/test2') {
    fs.readFile('./test2.html', function (err, data) {
      res.writeHead(200, {"Content-type":"text/html;charset=UTF-8"});
      res.end(data);
    })
  }else if (req.url === '/0.jpg') {
    fs.readFile('./0.jpg', function (err, data) {
      res.writeHead(200, {"Content-type":"text/image"});
      res.end(data);
    })
  }else if (req.url === '/test1.css') {
    fs.readFile('./css.css', function (err, data) {
      res.writeHead(200, {"Content-type":"text/css"});
      res.end(data);
    })
  }else {
    res.writeHead(404, {"Content-type":"text/html;charset=UTF-8"});
    res.end('矮油，你输了个啥子呀');
  }
})

// 开启服务，设置监听端口
server.listen(3000, function () {
  console.log('server run at 3000');
})