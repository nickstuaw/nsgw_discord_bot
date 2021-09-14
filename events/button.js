const {SlashCommandBuilder, userMention} = require("@discordjs/builders");
const {MessageActionRow, MessageButton, RoleManager} = require("discord.js");
const {data} = require("../commands/roles");
// plugin user role id is 887034141898600468

async function getRow(interaction) {
    let mc_btn, pls_btn;
    mc_btn = new MessageButton()
        .setCustomId('mc_joined')
        .setLabel('Click to leave the Minecraft server.')
        .setStyle('DANGER');
    if(!interaction.member.roles.cache.has('887033315356454954')) {
        await interaction.member.roles.add('887033315356454954');
    }
    return new MessageActionRow()
        .addComponents(
            mc_btn,
            pls_btn
        );
}

module.exports = {
    name: 'interactionCreate',
    async execute(interaction) {
        if (!interaction.isButton()) return;
        let mc_btn, pls_btn, row;
        switch (interaction.component.customId) {
            case 'open_options':
                mc_btn = new MessageButton()
                    .setCustomId('join_mc')
                    .setLabel('Join Minecraft')
                    .setStyle('SUCCESS');
                pls_btn = new MessageButton()
                    .setCustomId('join_plugins')
                    .setLabel('Join Plugins Support')
                    .setStyle('SUCCESS');
                if(interaction.member.roles.cache.has('887033315356454954')) {
                    mc_btn = new MessageButton()
                        .setCustomId('mc_joined')
                        .setLabel('Leave Minecraft.')
                        .setStyle('DANGER');
                }
                if(interaction.member.roles.cache.has('887034141898600468')) {
                    pls_btn = new MessageButton()
                        .setCustomId('plugins_joined')
                        .setLabel('Leave Plugins Support.')
                        .setStyle('DANGER');
                }
                row = new MessageActionRow()
                    .addComponents(
                        mc_btn,
                        pls_btn
                    );
                await interaction.reply({content: 'Profile: '+userMention(interaction.user.id)+'\n__Role options__', components: [row], ephemeral: true});
                break;
            case 'join_mc':
                mc_btn = new MessageButton()
                    .setCustomId('mc_joined')
                    .setLabel('Click to leave the Minecraft server.')
                    .setStyle('DANGER');
                if(!interaction.member.roles.cache.has('887033315356454954')) {
                    await interaction.member.roles.add('887033315356454954');
                }
                await interaction.update({components: [interaction.message.components[0].spliceComponents(0,1,mc_btn)], ephemeral: true});
                break;
            case 'mc_joined':
                mc_btn = new MessageButton()
                    .setCustomId('join_mc')
                    .setLabel('Click to join the Minecraft server.')
                    .setStyle('SUCCESS');
                if(interaction.member.roles.cache.has('887033315356454954')) {
                    await interaction.member.roles.remove('887033315356454954');
                }
                await interaction.update({components: [interaction.message.components[0].spliceComponents(0,1,mc_btn)], ephemeral: true});
                break;
            case 'join_plugins':
                pls_btn = new MessageButton()
                    .setCustomId('plugins_joined')
                    .setLabel('Click to leave Plugins Support.')
                    .setStyle('DANGER');
                if(!interaction.member.roles.cache.has('887034141898600468')) {
                    await interaction.member.roles.add('887034141898600468');
                }
                await interaction.update({components: [interaction.message.components[0].spliceComponents(1,1,pls_btn)], ephemeral: true});
                break;
            case 'plugins_joined':
                pls_btn = new MessageButton()
                    .setCustomId('join_plugins')
                    .setLabel('Click to join Plugins Support.')
                    .setStyle('SUCCESS');
                if(interaction.member.roles.cache.has('887034141898600468')) {
                    await interaction.member.roles.remove('887034141898600468');
                }
                await interaction.update({components: [interaction.message.components[0].spliceComponents(1,1,pls_btn)], ephemeral: true});
                break;
        }
    }
}