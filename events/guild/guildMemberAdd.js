const user = require('../../schemas/User')

module.exports = async (client, connectedObject) => {
    client.channels.cache.get("1081604018289254521").send(`${connectedObject.user.username} connected`);
    let userData = { UserId: connectedObject.user.id , UserName: connectedObject.user.username, Role:'player' };

    await user.findOne(userData).then(data => {
        if(!data)
        {
            user.create(userData);
        }
    });

    //TODO user add player role
}

