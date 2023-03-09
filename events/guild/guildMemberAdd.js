const user = require('../../schemas/User')

module.exports = async (client, connectedObject) => {
    let userData = { UserId: connectedObject.user.id , UserName: connectedObject.user.username, Role:'player', Rating:'0' };

    await user.findOne(userData).then(data => {
        if(!data)
        {
            user.create(userData);
        }
    });afsdlkjfasldkf

    newbie_role = connectedObject.guild.roles.cache.find(role => role.id === '1082526951220191243')
    connectedObject.roles.add(newbie_role)
    //TODO user add player role
}

