const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hello')
        .setDescription('hello [name]'),
    async execute(interaction) {
        await interaction.reply(`hello ${interaction.user.username}`);
    },
};

    

    