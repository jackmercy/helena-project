var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var imageSchema = new Schema({
    img: {
        type: String
    },
    category: {
        type: String
    }
});

module.exports = mongoose.model('image', imageSchema, 'image');