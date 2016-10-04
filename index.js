var app = require('./route');

app.listen(app.get('port'), function() {
    console.log('Instagram server running on port ' + app.get('port'));
});