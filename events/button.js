const {userMention, Embed} = require("@discordjs/builders");
const {MessageActionRow, MessageButton, MessageEmbed} = require("discord.js");
const { guildId } = require('../config.json');
// plugin user role id is 887034141898600468

const types = [['mcs','the Minecraft server','887033315356454954'],['pls','Plugins Support','887034141898600468']];

async function process(interaction, id) {// id = component.customId
    const key = id.split("_")[0];
    let type, index;
    for(index in types) {
        if(types[index][0] === key) {
            type = types[index];
            break;
        }
    }
    const action = id.split("_")[1];
    let btn;
    if (action === "join") {
        if (!interaction.member.roles.cache.has(type[2])) {
            await interaction.member.roles.add(type[2]);
        }
        btn = new MessageButton()
            .setCustomId(key + "_leave")
            .setLabel("Leave " + type[1] + ".")
            .setStyle("DANGER")
    } else if (action === "leave") {
        if(interaction.member.roles.cache.has(type[2])) {
            await interaction.member.roles.remove(type[2]);
        }
        btn = new MessageButton()
            .setCustomId(key + '_join')
            .setLabel("Join " + type[1] + ".")
            .setStyle('SUCCESS');
    }
    let final = new MessageActionRow();
    console.log()
    let row = interaction.message.components[0].spliceComponents(index, 1, btn).components;
    for(let i in row) {
        final.addComponents(row[i])
    }
    return final
}

module.exports = {
    name: 'interactionCreate',
    async execute(guild,client, interaction) {
        if (!interaction.isButton()) return;
        if (interaction.component.customId === 'open_options') {
            let btn, item;
            console.log("types = " + types)
            const row = new MessageActionRow();
            for(let i in types) {
                item = types[i]
                console.log("start of loop, item = "+item)
                console.log("role check")
                if (interaction.member.roles.cache.has(item[2])) {
                    btn = new MessageButton()
                        .setCustomId(item[0] + "_leave")
                        .setLabel("Leave " + item[1] + ".")
                        .setStyle("DANGER")
                } else {
                    btn = new MessageButton()
                        .setCustomId(item[0] + '_join')
                        .setLabel("Join " + item[1] + ".")
                        .setStyle('SUCCESS')
                }
                row.addComponents(btn)
                console.log("end of loop")
            }

            const e1 = guild.emojis.cache.get("887440139855478785"),
            e2 = guild.emojis.cache.get("887440139855478785");
            const e1s = "<:minecraftrole:887440139855478785>"
            console.log(guild.emojis.cache);

            const embed = new MessageEmbed().addField("Role options",
                'Profile: ' + userMention(interaction.user.id) + '\n__Role options__\n' +
                ' **`Minecraft`**||Join the Minecraft server||\n' +
                ' **`Plugin support`**||Access plugin support||\n' +
                ' `Art`||Artists, photographers, all art enthusiasts - coming soon||',
                false);

            await interaction.reply({content:'Emoji '+e1,
                embeds: [embed],
                components: [row],
                ephemeral: true
            });
        } else {
            await interaction.update({components: [await process(interaction, interaction.component.customId)]})
        }
    }
}