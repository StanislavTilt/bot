const mongoose = require('mongoose');
module.exports = async (client) => {

  await mongoose.connect(process.env.DATABASE_URI, {
    keepalive: true,
    useNewUrlParser: true,
  });

  if(mongoose.connect)
  {
    console.log('db is running');
  }

  console.log(`bot: ${client.user.tag}\nusers: ${client.users.cache.size}`); //channels: ${client.channels.cache.size}

  let statuses = [
      'dev mode',
  ]

  setInterval(function () {
    let status = statuses[Math.floor(Math.random() * statuses.length)];

    client.user.setActivity(status, { type: 'PLAYING' })
  }, 10000)
}
