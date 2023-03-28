const { model, Schema } = require('mongoose');

let UserGame = new Schema({
    UserId: String,
    GameId: String,
    PlayerNumber: Number
});

module.exports = model('userGame', UserGame);