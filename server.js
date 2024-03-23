const http = require('http');

http.createServer((request, response) => {
    response.writeHead(302, { 'Location': 'http://www.google.com' });
    response.end();
})
.listen(8082);
