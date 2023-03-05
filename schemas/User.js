const { model, Schema } = require('mongoose');

let User = new Schema({
    UserId: String,
    UserName: String,
    Role: String,
});

module.exports = model('user', User);