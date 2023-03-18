const { model, Schema } = require('mongoose');

let User = new Schema({
    UserId: String,
    UserName: String,
    Role: String,
    Rating: Number
});

module.exports = model('user', User);