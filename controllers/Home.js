var Post = require('../models/Post');

module.exports = {
    get: function(req, res) {
        Post.find(function(err, doc) {
            res.json(doc);
        })
    },
    post: function(req, res) {
        var newPost = new Post({
            url: "imgURL",
            caption: "photoCaption"
        });
        newPost.save(function(err, doc) {
            console.log(doc);
            res.json(doc);
        });
    }
}