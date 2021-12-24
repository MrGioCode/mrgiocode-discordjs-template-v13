import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config();

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on('ready', () => {
    console.log('Buenaz Tardez')
});

//Comandos_Bot

client.on('messageCreate', (message) => {
    if (message.content === 'hola') {
        message.reply({
            content: 'Hola!!! xD'
        });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === 'ping') {
        message.reply({
            content: '**' + client.ws.ping + '**ms - Websocket \nHola xd' 
        })
    }
})


//Login_Bot

client.login(process.env.TOKEN);
