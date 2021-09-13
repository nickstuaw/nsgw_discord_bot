const {SlashCommandBuilder} = require("@discordjs/builders");
const {MessageActionRow, MessageButton} = require("discord.js");
module.exports = {
    data: new SlashCommandBuilder()
        .setName('web')
        .setDescription('View links.'),
    async execute(interaction) {
        let button = new MessageButton()
            .setCustomId('website')
            .setLabel('Main Site')
            .setStyle('LINK')
            .setURL('https://dev.nsgw.xyz/');
        const row = new MessageActionRow()
            .addComponents(
                button,
            );
        await interaction.reply({ content: 'See below:', components: [row], ephemeral: true })
    },
};
