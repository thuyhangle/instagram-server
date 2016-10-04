var mongoose = require('../core/db');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    url: String,
    caption: String
});

module.exports = mongoose.model('Post', postSchema);