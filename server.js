var http = require('http')

http
.createServer((request, responce) => {
    responce.writeHead("200", "not ok")
 responce.write('<a href="http://www.google.com">Hello World</a>');
 responce.end()
})
.listen(8080)