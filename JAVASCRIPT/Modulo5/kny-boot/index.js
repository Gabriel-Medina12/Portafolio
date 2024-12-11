const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () =>{
    console.log('sesion iniciada');
});

client.on('message', (mensaje)=>{
    if (mensaje.content == 'ping'){
       mensaje.reply('...');
    }
}) 
client.login(process.env.TOKEN)