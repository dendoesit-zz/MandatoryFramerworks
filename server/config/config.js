var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');
module.exports = {
    development: {
         db: 'mongodb://localhost/frameworks',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production:{
        db: 'mongodb://dan:secret@ds015720.mlab.com:15720/frameworks',
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
}