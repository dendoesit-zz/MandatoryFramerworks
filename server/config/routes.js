var auth = require('./auth');
var mongoose = require('mongoose');
var express = require('express');
var users = require('../controllers/users');
var tags = require('../controllers/tags');
var categories = require('../controllers/categories');
var contents = require('../controllers/contents');



module.exports = function (app) {
    
    //Users
    app.get('/api/users', auth.requiresRole('admin'), users.getUsers);
    app.post('/api/users', users.createUser, users.updateUser);
    app.delete('/api/users/:id', users.deleteUser);
    app.get('/api/users/:id', users.editUser);
    app.put('/api/users/:id', users.updateUser);
    
    //Tags
    app.get('/api/tags', auth.requiresRole('admin'), tags.getTags);
    app.post('/api/tags', tags.createTag);
    app.delete('/api/tags/:id', tags.deleteTag);
    app.get('/api/tags/:id', tags.editTag);
    app.put('/api/tags/:id', tags.updateTag);
    
    //Categories
    app.get('/api/categories', auth.requiresRole('admin'), categories.getCategories);
    app.post('/api/categories', categories.createCategory);
    app.delete('/api/categories/:id', categories.deleteCategory);
    app.get('/api/categories/:id', categories.editCategory);
    app.put('/api/categories/:id', categories.updateCategory);
    
    //Contents
    app.get('/api/contents', auth.requiresRole('admin'), contents.getContents);
    app.post('/api/contents', contents.createContent);
    app.delete('/api/contents/:id', contents.deleteContent);
    app.get('/api/contents/:id', contents.editContent);
    app.put('/api/contents/:id', contents.updateContent);
    
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
