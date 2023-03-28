const { model, Schema } = require('mongoose');

let Game = new Schema({
    MessageId: String, //он же и будет айдишником игры
    LeadingId: String,
    Status: String
});

module.exports = model('game', Game);