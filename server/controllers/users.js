var User = require('mongoose').model('User');
var encrypt = require('../utilities/encryption');

exports.getUsers = function (req, res) {
    User.find({}).exec(function (err, collection) {
        res.send(collection);
    });
};

exports.createUser = function (req, res, next) {
    var userData = req.body;
    userData.salt = encrypt.createSalt();
    userData.hashed_pwd = encrypt.hashPwd(userData.salt, userData.password);
    console.log(userData);
    User.create(userData, function (err, user) {
        if (err) {
            if (err.toString().indexOf('E11000') > -1) {
                err = new Error('Duplicate Username');
            }
            res.status(400);
            return res.send({
                reason: err.toString()
            });
        }
        req.logIn(user, function (err) {
            if (err) {
                return next(err);
            }
            res.send(user);
        });
    });
};

exports.deleteUser = function (req, res, next) {
    console.log("trying to delete now");
    User.findByIdAndRemove(req.params.id, function (err) {
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
exports.editUser = function (req, res, next) {
    console.log("editing user right now");
    User.findOne({
        _id: req.params.id
    }, function (err, data) {
        res.json(data);
    });
};

exports.updateUser = function (req, res, next) {
    var id = req.params.id;
    console.log(req.body.username);
    console.log(req.body.firstName);
    console.log(req.body.lastName);
    User.findOneAndUpdate({ _id : req.params.id},
                          {$set: {
            username: req.body.username,
            firstName: req.body.firstName,
            lastName: req.body.lastName
        }
            },
                          {new: true
            },
        function (err, doc) {
            if (err) {
                console.log("smthing went wrong");
            }
            console.log("this is our doc" + doc);
        }
        );

};