const {EmbedMessage} = require('discord.js');

module.exports = async (client, reaction, user) => {

    const exampleEmbed = {
        "title": "⠀Регистрация Game #1",
        "description": "**Ведущий - свободно**",
        "color": "#2d3035",
        "fields": [
            {
                "name": " ",
                "value": "**01 - свободно\n02 - свободно\n03 - свободно\n04 - свободно\n05 - свободно**",
                "inline": true
            },
            {
                "name": " ",
                "value": "**06 - свободно\n07 - свободно\n08 - свободно\n09 - свободно\n10 - свободно**",
                "inline": true
            }
        ],
        "thumbnail": {url: "https://cdn.discordapp.com/attachments/1083613997066092584/1083621493252042782/warn.png"},
        "image": {url: "https://cdn.discordapp.com/attachments/1083613997066092584/1083614061201199134/image.png"}
    };

    reaction.message.channel.send({embed: exampleEmbed}).catch(console.error)
}
