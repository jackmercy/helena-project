var express = require('express');

// var mongoose = require('mongoose');
// var Book = require('../models/User.model');

var routes = function(User) {
    var router = express.Router();
    
    var userController = require('../controllers/user.controller')(User);

    router.route('/')
        .get(userController.getUser)
        .post(userController.login);



    return router;
}


module.exports = routes;