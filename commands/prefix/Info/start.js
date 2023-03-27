const {EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle} = require("discord.js");
const globalConfig = require('../../../config/config');

module.exports = {
    config: {
        name: "start",
        description: "Start game",
    },
    permissions: ['SendMessages'],
    owner: false,
    run: async (client, message, args, prefix, config, db) => {
        const player_button = new ButtonBuilder()
            .setCustomId('player_button')
            .setLabel('Роль: Игрок')
            .setStyle(ButtonStyle.Primary);
        const moderator_button = new ButtonBuilder()
            .setCustomId('moderator_button')
            .setLabel('Роль: Ведущий')
            .setStyle(ButtonStyle.Success);
        const row = new ActionRowBuilder()
            .addComponents(player_button, moderator_button);

        message.channel.send({embeds: [globalConfig.Embeds.REG_EMBED], components: [row] });

        // message.guild.channels.create({name: 'GAME #', type: 4})
        //     .then(category => {
        //         message.guild.channels.create({name: 'voice', type: 2, parent: category.id})
        //         message.guild.channels.create({name: 'chat', type: 0, parent: category.id})
        //             .then(textChannel => {
        //                 textChannel.send({content: '123', components: [row]})
        //             })
        //     })
        //     .then(message.channel.send('Игра успешно создана!'))
        //     .catch(console.error)
    },
};
