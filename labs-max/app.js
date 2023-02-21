const http = require('http');
const routes = require('./routes');

const PORT = 8000;

const server = http.createServer(routes.handler);


server.listen(PORT);
   console.log(`Server is listining to PORT: ${PORT}`);