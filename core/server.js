var express = require('express');

var app = express();

app.set('port', (process.env.PORT || 6969));

module.exports = app;