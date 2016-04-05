var mongoose = require('mongoose')

module.exports = function(config) {
//Database connection
mongoose.connect('mongodb://localhost/frameworks');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection erorr.....'));
db.once('open', function callback() {
    console.log('frameworks db opened');
});
    
    }