const { EmbedBuilder, Events } = require("discord.js");
const client = require("../../index");
const config = require("../../config/config.js");
const { QuickDB } = require("quick.db");
const db = new QuickDB();

module.exports = {
    name: "interactionCreate"
};

client.on(Events.MessageReactionAdd, async (reaction) => {
    reaction.message.channel.send({
        embeds: [
            new EmbedBuilder()
                .setDescription('Test')
        ],
        ephemeral: true
    });
});

