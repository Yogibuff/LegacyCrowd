var express = require('express'),
    server = express();

server.use(express.static('server/public'));

server.use(express.static('client'));

server.listen(3000);