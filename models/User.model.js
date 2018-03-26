var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {
        type: String
    },
    role: {
        type: String
    }
});

module.exports = mongoose.model('user', UserSchema, 'user');