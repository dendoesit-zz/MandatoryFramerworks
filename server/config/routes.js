var auth = require('./auth');
var mongoose = require('mongoose');
var express = require('express');
var users = require('../controllers/users');



module.exports = function (app) {

    app.get('/api/users', auth.requiresRole('admin'), users.getUsers);
    app.post('/api/users', users.createUser, users.updateUser);
    app.delete('/api/users/:id', users.deleteUser);
    app.get('/api/users/:id', users.editUser);
    app.put('/api/users/:id', users.updateUser);
    
    app.get('/partials/*', function (req, res) {
        res.render('../../public/app/' + req.params[0]);
    });

    app.post('/login', auth.authenticate);

    app.post('/logout', function (req, res) {
        req.logout();
        res.end();
    });

    app.get('*', function (req, res) {
        res.render('index', {
            bootstrappedUser: req.user
        });
    });
    
};
