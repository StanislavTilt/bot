const { Discord, Client, Collection } = require("discord.js");

const client = new Client({
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});
require('dotenv').config() ;
// const DatabaseConnection = require('./database/connection');
// const db = new DatabaseConnection(process.env.DATABASE_URI);

client.commands = new Collection();


["commands"].forEach(x => client[x] = new Collection());
["command", "event"].forEach(x => require(`./handlers/${x}`)(client));

client.login(process.env.BOT_TOKEN);
