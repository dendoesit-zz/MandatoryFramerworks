var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
    name: String
});

var Category = mongoose.model('Category', categorySchema, "Categories");

function createDefaultCategories() {
    Category.find({}).exec(function (err, collection) {
        if (collection.length === 0) {
            Category.create({name: 'Coding'});
            Category.create({name: 'Design'});
        }
    });
}

exports.createDefaultCategories = createDefaultCategories;
exports.Category = Category;