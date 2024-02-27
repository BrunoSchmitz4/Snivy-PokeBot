const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require("discord.js")

const row = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomId("select")
            .setPlaceholder("Nenhuma linguagem selecionada.")
            .addOptions(
            {
                label: "JavaScript",
                description: "Veja a documentação do JavaScript",
                value: "javascript"
            },
            {
                label: "Python",
                description: "Veja a documentação do Python",
                value: "python"
            },
            {
                label: "C#",
                description: "Veja a documentação do C#",
                value: "csharp"
            },
            {
                label: "Discord.JS",
                description: "Veja a documentação do Discord.JS",
                value: "discordjs"
            },
            )
    )

module.exports = {
    data: new SlashCommandBuilder()
        .setName("docs")
        .setDescription("Apresenta algumas documentações de linguagens :D"),

    async execute(interaction) {
        await interaction.reply({content: "Selecione uma das tecnologias abaixo: ", components: [row]})
    }
}