var Content = require('mongoose').model('Content');

exports.getContents = function(req, res) {
    Content.find({}).exec(function (err, collection) {
        res.send(collection);
    });
};

exports.createContent = function (req,res) {
    Content.create(req.body, function(err,doc) {
        res.json(doc);
    });
};

exports.deleteContent = function (req, res) {
    Content.findByIdAndRemove(req.params.id, function (err) {
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

exports.editContent = function (req, res, next) {
    console.log('editing content');
    Content.findOne({
        _id: req.params.id
    }, function (err, data) {
        res.json(data);
    });
};

exports.updateContent = function (req, res, next) {
    var id = req.params.id;
    Content.findOneAndUpdate({
        _id: req.params.id
    }, {
        $set: {
            title: req.body.title,
            body: req.body.body,
            tags: req.body.tags,
            category: req.body.category
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