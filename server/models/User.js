var mongoose = require('mongoose');
var encrypt = require('../utilities/encryption');

var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    salt: String,
    hashed_pwd: String,
    roles: [String]
});
userSchema.methods = {
    authenticate: function (passwordToMatch) {
        return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
    }
};
var User = mongoose.model('User', userSchema);

function createDefaultUsers() {
    User.find({}).exec(function (err, collection) {
        if (collection.length === 0) {
            var salt, hash;
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'secret');
            User.create({
                firstName: 'Dan',
                lastName: 'First',
                username: 'dan',
                salt: salt,
                hashed_pwd: hash,
                roles: ['admin']
            });
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'secret');
            User.create({
                firstName: 'Mike',
                lastName: 'Second',
                username: 'mike',
                password: 'secret',
                salt: salt,
                hashed_pwd: hash,
                roles: []
            });
        }
    });
}

exports.createDefaultUsers = createDefaultUsers;
exports.User = User;