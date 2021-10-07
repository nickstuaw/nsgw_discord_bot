const {SlashCommandBuilder, userMention} = require("@discordjs/builders");
const {MessageActionRow, MessageButton} = require("discord.js");
module.exports = {
    data: new SlashCommandBuilder()
        .setName('setuproleassignment')
        .setDescription('Admin.'),
    async execute(interaction) {
        if(interaction.user.id!=='552617316219879434') return;
        let button = new MessageButton()
            .setCustomId('open_options')
            .setLabel('Configure your notifications')
            .setStyle('PRIMARY');
        const row = new MessageActionRow()
            .addComponents(
                button,
            );
        await interaction.channel.send({ content: '' +
                '**\\***\n' +
                'Welcome to Nick\'s Discord server for YouTube and Twitch!\n' +
                '**\\***\n' +
                '\n' +
                '**._ / -** - - - **S E R V E R _ _ _ _ R U L E S** - - - **- \\ _.**' +
                '\n' +
                '**1** _ _ Stay respectful and use common sense. No harassment or hate speech.' +
                '\n' +
                '**2** _ _ Don\'t spam, scam, or troll.' +
                '\n' +
                '**3**. _ _ Please don\'t advertise your streams/videos or other servers without Nick\'s permission. ' +
                'This space is for my content and considering the small size of my audience, this rule exists.' +
                '\n' +
                '**5** _ _ Try to keep topics to their relevant text channels. No NSFW content.' +
                '\n' +
                '\n' +
                'Want to be updated when a new video is out, or when a stream starts?\n' +
                'Click below to configure your own notifications.\n' +
                '\n' +
                '`Get updates:`', components: [row] })
    },
};
