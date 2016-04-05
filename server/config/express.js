var express = require('express'),
    bodyParser = require('body-parser');

module.exports = function (app, config) {

    app.set('views', config.rootPath + '/server/views');
    app.set('view engine', 'jade');

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(express.static(config.rootPath + '/public'));

}