var app = require('./core/server');
var HomeController = require('./controllers/Home');

app.get('/', HomeController.get);
app.post('/', HomeController.post);

module.exports = app;