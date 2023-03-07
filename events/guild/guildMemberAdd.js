const user = require('../../schemas/User')

module.exports = async (client, connectedObject) => {
    let userData = { UserId: connectedObject.user.id , UserName: connectedObject.user.username, Role:'player', Rating:'0' };

    await user.findOne(userData).then(data => {
        if(!data)
        {
            user.create(userData);
        }
    });


    //TODO user add player role
}

