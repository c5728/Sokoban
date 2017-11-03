'use strict';

let http = require('http');
<<<<<<< HEAD

http.createServer((request, response) => {
request.on('end', () => {
console.log('Request method: ' + request.method);
console.log('Request url: ' + request.url);
});

// 傳送HTTP header
// HTTP Status: 200 : OK
// Content Type: text/plain
response.writeHead(200, {
'Content-Type': 'text/plain'
});

// 傳送回應內容。
response.end('Hello World!\n');
}).listen(8088);

// log message to Console
console.log('Server running at http://127.0.0.1:8088/');
=======
http.createServer((request, response) => {
// 1.傳送HTTP header  2.HTTP Status: 200 : OK   3.Content Type: text/plain
//取得 node.js 的 fs 模組
let fs = require('fs')

fs.readFile('../htdocs/index.html',(err,data) => {

response.writeHead(200, {
 'Content-Type': 'text/html'
 });
response.write(data);
});
// 傳送回應內容。
response.end();

console.log('request.headers: \n', request.headers)
}).listen(8088);

// log message to Console
console.log(' 伺服器啓動，連線url: http://127.0.0.1:8088/');
>>>>>>> 84c59f6abd5eca3cae8e0636293823fc26a98022
