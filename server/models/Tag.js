var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tagSchema = new Schema({
    name: String
});


var Tag = mongoose.model('Tag', tagSchema, 'Tags');

function createDefaultTags() {
    Tag.find({}).exec(function (err, collection) {
        if (collection.length === 0) {
            Tag.create({name: 'Javascript'});
            Tag.create({name: 'CSS'});
        }
    });
}

exports.createDefaultTags = createDefaultTags;
exports.Tag = Tag;