const {SlashCommandBuilder, userMention} = require("@discordjs/builders");
const {MessageActionRow, MessageButton} = require("discord.js");
module.exports = {
    data: new SlashCommandBuilder()
        .setName('roles')
        .setDescription('Manage your own roles.'),
    async execute(interaction) {
        let button = new MessageButton()
            .setCustomId('open_options')
            .setLabel('Open role options')
            .setStyle('PRIMARY');
        const row = new MessageActionRow()
            .addComponents(
                button,
            );
        await interaction.reply({ content: 'See below:', components: [row], ephemeral: true })
        //await interaction.channel.send({ content: 'Role selection', components: [row]});
    },
};
