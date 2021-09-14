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
            .setLabel('Access the Discord Server')
            .setStyle('PRIMARY');
        const row = new MessageActionRow()
            .addComponents(
                button,
            );
        await interaction.channel.send({ content: '' +
                '**\\***\n' +
                'Welcome to **Neb\'s Caverns**!\n' +
                '**\\***\n' +
                '\n' +
                'This discord server has separate areas with their own purposes.\n' +
                'Get started by clicking the "Open role options" button below!\n' +
                'If you can\'t see it, you\'ll have to update discord.\n' +
                '\n' +
                '`Access topics:`', components: [row] })
    },
};
