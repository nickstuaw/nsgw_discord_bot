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
            .setLabel('Open role options')
            .setStyle('PRIMARY');
        const row = new MessageActionRow()
            .addComponents(
                button,
            );
        await interaction.channel.send({ content: 'Access topics:', components: [row] })
    },
};
