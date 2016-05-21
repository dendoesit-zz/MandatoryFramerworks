var Tag = require('mongoose').model('Tag');

exports.getTags = function (req, res) {
    Tag.find({}).exec(function (err, collection) {
        res.send(collection);
        console.log(collection);
    });
};

exports.createTag = function (req, res) {
    console.log(req.body);
    Tag.create(req.body, function (err, doc) {
        res.json(doc);
    });
};

exports.deleteTag = function (req, res) {
    Tag.findByIdAndRemove(req.params.id, function (err) {
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

exports.editTag = function (req, res, next) {
    console.log('editing tag');
    Tag.findOne({
        _id: req.params.id
    }, function (err, data) {
        res.json(data);
    });
};

exports.updateTag = function (req, res, next) {
    var id = req.params.id;
    Tag.findOneAndUpdate({
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