const { EmbedBuilder, Events, ButtonBuilder, ButtonStyle, ActionRowBuilder} = require("discord.js");
const client = require("../../index");
const config = require("../../config/config.js");
const { QuickDB } = require("quick.db");
const game = require("../../schemas/Game");
const checkUserExistsDb = require("../../helpers/checkUserExistsDb");
const userGame = require("../../schemas/UserGame");
const {count, forEach} = require("mathjs");
const user = require("../../schemas/User");
const globalConfig = require("../../config/config");
const db = new QuickDB();

module.exports = {
    name: "interactionCreate"
};

client.on(Events.InteractionCreate, async (interaction) => {
    await checkUserExistsDb.checkUser(interaction.user);

    if(interaction.isButton())
    {
        if(interaction.customId == config.Buttons.PLAYER_BUTTON || interaction.customId == config.Buttons.MODERATOR_BUTTON )
        {
            if(interaction.customId == config.Buttons.PLAYER_BUTTON)
            {
                let gameData = { MessageId: interaction.message.id, Status: 'new' };
                await game.findOne(gameData).then(async gameData => {
                    if(gameData)
                    {
                        let userGameData = { GameId: gameData.MessageId };
                        await userGame.find(userGameData).then(async userGameDatas => {
                            if(count(userGameDatas) < 10)
                            {
                                let userGameData = { UserId: interaction.user.id, GameId: gameData.MessageId }
                                await userGame.findOne(userGameData).then(async data => {
                                    if(!data)
                                    {
                                        data = {
                                            UserId: interaction.user.id,
                                            GameId: gameData.MessageId,
                                            PlayerNumber: count(userGameDatas)+1
                                        };
                                        userGame.create(data);
                                        userGameDatas.push(data);
                                        await refactoredGameMessage(interaction.message, gameData, userGameDatas)
                                        interaction.reply({ content: "added player", ephemeral: true });
                                    } else{
                                        interaction.reply({ content: "already added", ephemeral: true });
                                    }
                                });
                            }else{
                                await interaction.reply({ content: "fulled", ephemeral: true });
                            }
                        })
                    }
                });
            }else if (interaction.customId == config.Buttons.MODERATOR_BUTTON)
            {
                let gameData = { MessageId: interaction.message.id, Status: 'new' };
                let gameModel = await game.findOne(gameData);
                if(!gameModel) {
                    interaction.reply({ content: "no game", ephemeral: true });
                }else{
                    if(gameModel.LeadingId !== '' && gameModel.LeadingId !== interaction.user.id) {
                        interaction.reply({ content: "no place", ephemeral: true });
                        let userGameDatas = await userGame.find({ GameId:gameModel.MessageId });
                        await refactoredGameMessage(interaction.message, gameModel, userGameDatas);
                    }else if(gameModel.LeadingId !== '' && gameModel.LeadingId === interaction.user.id){
                        interaction.reply({ content: "ur alrd moder", ephemeral: true });
                    }else if(gameModel.LeadingId === '') {
                        gameModel.LeadingId = interaction.user.id
                        gameModel.save();
                        let userGameDatas = await userGame.find({ GameId:gameModel.MessageId });
                        await refactoredGameMessage(interaction.message, gameModel, userGameDatas);
                        interaction.reply({ content: "added like leader", ephemeral: true });
                    }
                }
            }
        }
    }


});

async function refactoredGameMessage(message, gameData, userGameDatas)
{
    let embed = {
        "title": "Регистрация на Game #1",
        "description": "Ведущий - **пусто**",
        "image": {
            "url": "https://cdn.discordapp.com/attachments/1083613997066092584/1083614061201199134/image.png"
        },
        "thumbnail": {
            "url": "https://cdn.discordapp.com/attachments/1083613997066092584/1083621493252042782/warn.png"
        },
        "color": "2961461",
        "footer": {
            "text": "Выберите под какой ролью вы хотите войти:"
        },
        "fields": [{
            "name": "",
            "value": "01 - **Слот 1**\n02 - **Слот 2**\n03 - **Слот 3**\n04 - **Слот 4**\n05 - **Слот 5**",
            "inline": true
        }, {
            "name": "",
            "value": "06 - **Слот 6**\n07 - **Слот 7**\n08 - **Слот 8**\n09 - **Слот 9**\n10 - **Слот 10**",
            "inline": true
        }]
    };

    userGameDatas.forEach(function(item){
        let valueIndex = item.PlayerNumber <= 5 ? 0 : 1;
        embed['fields'][valueIndex]['value'] = embed['fields'][valueIndex]['value'].replace('Слот '+item.PlayerNumber, '<@'+item.UserId+'>');
    });

    if(gameData.LeadingId !== '')
    {
        embed['description'] = embed['description'].replace('пусто', '<@'+gameData.LeadingId+'>')
    }

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

    message.edit({embeds: [embed], components: [row] })
}

