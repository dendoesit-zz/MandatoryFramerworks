var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();
var config = {
    rootPath: __dirname
}

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

 app.get('/partials/*', function(req, res){
    res.render('../../public/app/' + req.params[0]);
})


app.get('*', function(req,res){
    res.render('index');
});

if(env === 'development') {
    mongoose.connect('mongodb://localhost/frameworks');
}else{
    mongoose.connect('mongodb://dan:secret@ds015720.mlab.com:15720/frameworks');
}

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection erorr.....'));
db.once('open', function callback() {
    console.log('frameworks db opened');
});


var port = process.env.PORT || 3030;
app.listen(port);
console.log('Listening on port ' + port + '...');

//require('./server/config/express')(app, config);
//require('./server/config/mongoose')(config);