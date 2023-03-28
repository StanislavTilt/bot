module.exports = {

    Prefix: "!", // YOUR BOT PREFIX.

    Users: {
        OWNERS: ["297826823587495936"] // THE BOT OWNERS ID.
    },

    Handlers: {
        MONGO: "" // YOUR MONGO URI. (USE THIS ONLY IN VSCODE)  mongodb+srv://stasispuha:A3SAABaTb8FwGRtN@cluster0.pk8i63e.mongodb.net/?retryWrites=true&w=majority
    },

    Client: {
        TOKEN: "", // YOUR BOT TOKEN. (USE THIS ONLY IN VSCODE)
        ID: "1081584840404652062" // YOUR BOT ID.
    },

    Roles: {
        PLAYER_ROLE: "1082526951220191243"
    },

    Buttons: {
        PLAYER_BUTTON: "player_button",
        MODERATOR_BUTTON: "moderator_button"
    },

    Embeds: {
        REG_EMBED: {
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
        }
    }
}