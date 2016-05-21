var Category = require('mongoose').model('Category');

exports.getCategories = function (req, res) {
    Category.find({}).exec(function (err, collection) {
        res.send(collection);
    });
};

exports.createCategory = function (req, res) {
    console.log(req.body);
    Category.create(req.body, function (err, doc) {
        res.json(doc);
    });
};

exports.deleteCategory = function (req, res) {
    Category.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.json({
                err: err
            });
        } else {
            res.json({
                err: false
            });
        }
    });
};

exports.editCategory = function (req, res, next) {
    console.log('editing tag');
    Category.findOne({
        _id: req.params.id
    }, function (err, data) {
        res.json(data);
    });
};

exports.updateCategory = function (req, res, next) {
    var id = req.params.id;
    Category.findOneAndUpdate({
        _id: req.params.id
    }, {
        $set: {
            name: req.body.name
        }
    }, {
        new: true
    }, function (err, doc) {
        if (err) {
            console.log('something went wrong');
        }
        console.log(doc);
    });
};