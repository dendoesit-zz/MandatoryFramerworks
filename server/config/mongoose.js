var mongoose = require('mongoose');
var userModel = require('../models/User');
var tagModel = require('../models/Tag');
var categoryModel = require('../models/Category');
var contentModel = require('../models/Content');
var crypto = require('crypto');

module.exports = function (config) {
    //Database connection
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection erorr.....'));
    db.once('open', function callback() {
        console.log('frameworks db opened');
    });

    userModel.createDefaultUsers();
    tagModel.createDefaultTags();
    categoryModel.createDefaultCategories();
    contentModel.createDefaultContents();
};



exports.createSalt = function () {
    return crypto.randomBytes(128).toString('base64');
};

exports.hashPwd = function (salt, pwd) {
    var hmac = crypto.createHmac('sha1', salt);
    hmac.setEncoding('hex');
    hmac.write(pwd);
    hmac.end();
    return hmac.read();
};