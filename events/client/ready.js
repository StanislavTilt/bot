module.exports = async client => {

  console.log(`bot: ${client.user.tag}\nusers: ${client.users.cache.size}`); //channels: ${client.channels.cache.size}

  let statuses = [
      'dev mode',
  ]

  setInterval(function () {
    let status = statuses[Math.floor(Math.random() * statuses.length)];

    client.user.setActivity(status, { type: 'PLAYING' })
  }, 10000)
}
