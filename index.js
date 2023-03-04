const { Client } = require("discord.js");
const config = require("./config.json");
const client = new Client();


client.on('ready', () => {
    console.log("READY!"); // asdsadas
});

client.on('message', msg => { // Message function
    if (msg.author.bot) return; // Ignore all bots
    if (!msg.content.startsWith('!'))  return; // It always has to starts with the prefix which is '!'
    
    if (msg.content.startsWith('!' + "ping")) { // When a player does '!ping'
        msg.reply("answer!") // The bot will say @Author, Pong!
    }
});

client.login(config["Bot_Info"].token);
