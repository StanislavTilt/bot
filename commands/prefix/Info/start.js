const {EmbedBuilder} = require("discord.js");
const globalConfig = require('../../../config/config');

module.exports = {
    config: {
        name: "start",
        description: "Start game",
    },
    permissions: ['SendMessages'],
    owner: false,
    run: async (client, message, args, prefix, config, db) => {
        message.guild.channels.create({name: 'GAME #', type: 4})
            .then(category => {
                message.guild.channels.create({name: 'voice', type: 2, parent: category.id})
                message.guild.channels.create({name: 'chat', type: 0, parent: category.id})
                    .then(textChannel => {
                        textChannel.send(globalConfig.Embeds.REG_EMBED)
                    })
            })
            .then(message.channel.send('Игра успешно создана!'))
            .catch(console.error)
    },
};
