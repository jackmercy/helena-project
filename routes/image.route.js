var express = require('express');

var routes = function(Image) {
    var router = express.Router();

    var imageController = require('../controllers/image.controller')(Image);
    /**
     * get all image route
     */
    router.route('/').get(imageController.getAll);

    /* router.use('/:Category', function(req, res, next) {
        Image.find({category: req.params.Category}, function(err, images) {
            if(err) {
                console.log(err);
            }
            else if(images) {
                req.image = image;
                next();
            }
            else {
                res.status(404).send("No image found");
            }
        });
    }); */

    router.route('/:Category')
        .get(imageController.getImageByCategory);

    return router;
}

module.exports = routes;