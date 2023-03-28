const client = require("../index");
const userModel = require('../schemas/User')
const config = require('../config/config');
module.exports = {
    checkUser
};

async function checkUser (user) {
    let userData = { UserId: user.id , UserName: user.username, Role:'player', Rating:'0' };

    await userModel.findOne(userData).then(data => {
        if(!data)
        {
            userModel.create(userData);
        }
    });
}
