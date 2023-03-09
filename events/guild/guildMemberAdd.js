const user = require('../../schemas/User')
const jsonConfig = require('../../objectIds.json')

module.exports = async (client, connectedObject) => {
    let userData = { UserId: connectedObject.user.id , UserName: connectedObject.user.username, Role:'player', Rating:'0' };

    await user.findOne(userData).then(data => {
        if(!data)
        {
            user.create(userData);
        }
    });

    connectedObject.roles.add(connectedObject.guild.roles.cache.get(jsonConfig.roles.newbie_role_id)).catch(console.error)
}