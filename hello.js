var http = require('http');

http.createServer(function (request, response) {
  response.writeHead(200, {
    'Content-type': 'text/plain'
  });


  response.end('Hello World!\n');

  console.log('request.headers: \n', request.headers)
}).listen(8088);

console.log('server running at http://127.0.0.1:8088/');
