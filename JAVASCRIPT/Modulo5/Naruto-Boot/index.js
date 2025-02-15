import { Client, GatewayIntentBits, REST, Routes } from 'discord.js';
import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

// Comandos de la aplicación
const commands = [
    {
        name: 'hola',
        description: 'Responde al saludo',
    },
    {
        name: 'chao',
        description: 'Responde a la despedida',
    },
    {
        name: 'personaje',
        description: 'Obtén información sobre un personaje de Naruto',
        options: [
            {
                name: 'nombre',
                type: 3, // Tipo 3 es STRING
                description: 'Nombre del personaje',
                required: true,
            },
        ],
    },
];

// Variables de entorno
const TOKEN = process.env.DISCORD_TOKEN;
const CLIENT_ID = process.env.DISCORD_CLIENT_ID;

// Configuración del REST
const rest = new REST({ version: '10' }).setToken(TOKEN);

// Registrar comandos
(async () => {
    try {
        console.log('Started refreshing application (/) commands.');
        await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error('Error refreshing application commands:', error);
    }
})();

// Obtener información del personaje de Naruto
async function getNarutoCharacterInfo(characterName) {
    try {
        const response = await axios.get(`https://narutodb.xyz/api/character/${characterName}`);
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            console.error(`Personaje "${characterName}" no encontrado.`);
        } else {
            console.error('Error fetching character info:', error.message);
        }
        return null;
    }
}

// Formatear la información del personaje
function formatCharacterInfo(characterInfo) {
    if (!characterInfo) return "No se encontró información sobre este personaje.";

    return `
**Nombre:** ${characterInfo.name}
**Imagen:** ${characterInfo.images || 'Desconocida'}
**Familia:** ${characterInfo.family || 'Desconocido'}
**Jutsu:** ${characterInfo.jutsu || 'Desconocida'}
**Naturaleza:** ${characterInfo.natureType || 'Ninguna'}
`;
}

// Configuración del cliente de Discord
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'hola') {
        await interaction.reply('Hola! ¿Cómo estás?');
    } else if (interaction.commandName === 'chao') {
        await interaction.reply('¡Adiós! Espero que regreses pronto.');
    } else if (interaction.commandName === 'personaje') {
        const characterName = interaction.options.getString('nombre');
        await interaction.deferReply();

        const characterInfo = await getNarutoCharacterInfo(characterName);

        if (characterInfo) {
            const formattedInfo = formatCharacterInfo(characterInfo);
            await interaction.editReply(`Información sobre **${characterName}**:\n${formattedInfo}`);
        } else {
            await interaction.editReply(`No se pudo encontrar información sobre **${characterName}**.`);
        }
    }
});

// Iniciar sesión con el bot
client.login(TOKEN).catch(error => {
    console.error('Error logging in:', error);
});