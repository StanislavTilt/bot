const { EmbedBuilder, Events } = require("discord.js");
const client = require("../../index");
const user = require('../../schemas/User')
const config = require('../../config/config');
module.exports = {
    name: "interactionCreate"
};

client.on(Events.GuildMemberAdd, async (connectedObject) => {
    let userData = { UserId: connectedObject.user.id , UserName: connectedObject.user.username, Role:'player', Rating:'0' };

    await user.findOne(userData).then(data => {
        if(!data)
        {
            user.create(userData);
        }
    });

    connectedObject.roles.add(connectedObject.guild.roles.cache.get(config.Roles.PLAYER_ROLE)).catch(console.error)
});

