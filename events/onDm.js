const {userMention} = require("@discordjs/builders");
const { Client, guildId, Collection, Intents, Guild, GuildChannel, TextChannel} = require('discord.js');
const {ChannelType} = require("discord-api-types/v8");
module.exports = {
    name: 'messageCreate',
    async execute(client, message) {
        console.log('is called');
        if (message.author.bot) return;
        console.log('is not bot');
        const channel = client.channels.cache.get('887310949315383337')
        if (!channel.isText()) return;
        console.log('is text');
        if (message.channel.type === 'DM') {
            console.log('is dm channel');
            channel.send(userMention(message.author.id) + " sent: " + message.content)
        }
    },
};
