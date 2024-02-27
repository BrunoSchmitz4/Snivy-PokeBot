const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Ouça sua playlist desejada :)"),

    async execute(interaction) {
        await interaction.reply("https://open.spotify.com/playlist/4GDYenZna2Lo5msD20kcbN?si=56c94bdc6ebc4598")
    }
}