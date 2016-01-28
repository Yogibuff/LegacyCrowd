var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.use(express.static('server/public'));

app.listen(port);