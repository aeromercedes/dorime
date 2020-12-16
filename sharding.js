const token = require('./config/token.json')
const Discord = require('discord.js')
const manager = new Discord.ShardingManager('main.js', { token: token.token })

manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`))
manager.spawn()