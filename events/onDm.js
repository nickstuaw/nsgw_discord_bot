const {userMention} = require("@discordjs/builders");
const { Client, guildId, Collection, Intents, Guild, GuildChannel, TextChannel} = require('discord.js');
const {ChannelType} = require("discord-api-types/v8");
module.exports = {
    name: 'messageCreate',
    async execute(guild,client, message) {
        if (message.author.bot) return;
        const channel = client.channels.cache.get('895719432641450044')
        if (!channel.isText()) return;
        if (message.channel.type === 'DM') {
            console.log('is dm channel');
            channel.send(userMention(message.author.id) + " sent: " + message.content)
        }
    },
};
