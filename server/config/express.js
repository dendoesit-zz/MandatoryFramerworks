var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var session = require('express-session');



module.exports = function (app, config) {

    app.set('views', config.rootPath + '/server/views');
    app.set('view engine', 'jade');

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(session({secret:'secret', resave:false, saveUninitialized:false}));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(express.static(config.rootPath + '/public'));

}

