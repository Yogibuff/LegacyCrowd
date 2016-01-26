var express = require('express'),
    server = express();

server.use(express.static('server/public'));

server.listen(3000);