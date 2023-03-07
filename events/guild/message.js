module.exports = async (client, message) => {
    if (message.author.bot || message.channel.type === "dm") return;

    let args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();

    if (message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) return message.channel.send(`no command`)
    if (!message.content.startsWith(process.env.PREFIX)) return;

    try
    {
        let commandfile = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd))
        if (commandfile) commandfile.run(client, message, args)
    }
    catch
    {
        message.channel.send('wrong command');
    }

}

