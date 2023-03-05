module.exports = {
    config: {
        name: "test",
        description: "test command",
        usage: "[message-id]",
        category: "base command",
        accessableby: "Admins",
        aliases: [], // To add custom aliases just type ["alias1", "alias2"].
    },
    run: async (client, message, args) => {
        message.reply("test answer!") // The bot will say @Author, Pong!
    },
}
