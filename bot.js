const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require('discord.js');
const bot = new Discord.Client();
//const auth = require('./auth.json');

bot.on('ready', ()=> {
    console.log('Bot is now online');
})
bot.on('message', msg=>{
    if(msg.author.bot) return;
    if (msg.channel.type == "dm") {
        msg.author.send(msg.content + " - " + msg.author.username);
        console.log(msg.content);
        return;
    }
    if((msg.content).toLowerCase().includes("xd")){
        msg.reply(' hit em with the xD');
    } else if(msg.content.startsWith("!")){
      if(msg.content === "!quote"){
        msg.reply(displayQuote());
      }
    }
  /*else if(msg.author.username === "Prescuit"){
        msg.reply(' Hello  先生!!');

    } else if(msg.author.username === "whatsavet"){
    msg.reply(' Hello A-star');

    } else if(msg.author.username === "Jimmy Dean Breakfast Sausage"){
    msg.reply(' xD to the max');

    }else {
        msg.reply(' nope');
    }
    */

});

function displayQuote(){
  var fs = require('fs');
  var quoteArray = fs.readFileSync('quotes.txt', 'utf8').split('\n');
  return(quoteArray[randomInt(0,quoteArray.length)]);
}


function randomInt(low, high) {

    return Math.floor(Math.random() * (high - low) + low)
}

bot.login(process.env.BOT_TOKEN);