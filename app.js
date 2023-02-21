
const http = require('http');
const routes = require('./routes');
//document is not defined

const server = http.createServer(routes.handler)

server.listen(8000);

