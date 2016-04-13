var mongoose = require('mongoose');

var ContentSchema = mongoose.Schema({
    title: String,
    body: String
});

function createDefaultContent() {
    Content.find({}).exec(function (err, collection) {
        if(collection.length === 0) {
            Content.creat({
                title: 'First Content added',
                body: 'This is the first thing we managed to add'
            });
        }
    })
}

exports.createDefaultContent = createDefaultContent;