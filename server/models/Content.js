var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contentSchema = new Schema({
    title: String,
    body: String,
    tags: Array,
    category: Array
});

var Content = mongoose.model('Content', contentSchema, 'Contents');

function createDefaultContents() {
    Content.find({}).exec(function (err, collection) {
        if(collection.length === 0) {
            Content.create({
                title: 'First Content added',
                body: 'This is the first thing we managed to add'
            });
        }
    });
}

exports.createDefaultContents = createDefaultContents;
exports.Content = Content;