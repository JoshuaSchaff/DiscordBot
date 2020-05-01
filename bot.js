const Discord = require('discord.js');
const bot = new Discord.Client();
const auth = require('./auth.json');

bot.on('ready', ()=> {
    console.log('Bot is now online');
})
bot.on('message', msg=>{
    if(msg.author.bot) return;
    if (msg.channel.type == "dm") {
        msg.author.send(msg.content + " - " + msg.author.username);
        return;
    }
    if(msg.content === "xD"){
        msg.reply(' hit em with the xD');

    } else if(msg.author.username === "Prescuit"){
        msg.reply(' Hello  先生!');

    } else if(msg.author.username === "whatsavet"){
    msg.reply(' Hello A-star');

    } else if(msg.author.username === "Jimmy Dean Breakfast Sausage\n"){
    msg.reply(' xD');

    }else {
        msg.reply(' nope');
    }
});

bot.login(auth.token);