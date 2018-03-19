var imageController = function(Image) {
    /**
     * return all images
     * @property 
     * @returns {Base64}
     */
    var getAll = function(req, res) {
        Image.find(function(err, images) {
            if(err) {
                console.log(err);
            } else {
                console.log(images);
                res.json(images);
            }
        });
    }

    
    /**
     * return images by its category
     * @property {Category} req.params.Category - Category to search in mongo
     */
    var getImageByCategory =function(req, res) {
        Image.find({category: req.params.Category}, function(err, images) {
            if(err) {
                console.log(err);
            }
            else if(images.length > 0) {
                res.json(images);
            }
            else if(images.length === 0) {
                res.status(404).send("No image found");
            }
        });
    }

    return {
        getAll: getAll,
        getImageByCategory: getImageByCategory
    }
}

module.exports = imageController;