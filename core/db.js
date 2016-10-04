var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/instagram-test');

module.exports = mongoose;