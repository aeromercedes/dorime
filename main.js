const blacklistedGuilds = require('./config/blacklistedGuilds.json')
const { token } = require('./config/token.json')
const Discord = require('discord.js')
const client = new Discord.Client()

client.login(token)

client.on('ready', () => {
    console.log('Started.')
});

/**

client.on('shardReady', shard => {
    const user = client.users.cache.get('727887715869261864');

    const readyEMbed = new Discord.MessageEmbed()
     .setTitle('Shard Ready')
     .setDescription('A shard for Dorime is now online. Shard ID: ' + shard.id)
    
    user.send(readyEMbed);
});
*/

// guild blacklist

client.on('guildCreate', guild => {
    const blembed = new Discord.MessageEmbed()
     .setTitle('Uh oh!')
     .setDescription('Your guild is blacklisted from adding `Dorime`.\nReason is confidental and will not be told.')
     .setFooter('You cannot appeal a blacklist.')
    if (blacklistedGuilds.includes(guild.id)) {
        guild.owner.send(blembed).then(() => guild.leave()).catch(console.error())
    }
});