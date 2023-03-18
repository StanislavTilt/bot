const config = require("../config/config.js");
const superDjs = require("super-djs");
const mongoose = require('mongoose');

module.exports = async (client) => {
	console.log(superDjs.colourText('[DATABASE] Connecting to MongoDB...', 'yellow'));
	await mongoose.connect(process.env.DATABASE_URI, {
		keepalive: true,
		useNewUrlParser: true,
	});

	if(mongoose.connect)
	{
		console.log(superDjs.colourText('[DATABASE] Connected to MongoDB!', 'green'));
	}
};
