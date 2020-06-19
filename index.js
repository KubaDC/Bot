const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NzIzMTE0MDQ0ODc3MzA3OTI1.XuyYLg.-270iFV02eqcDhCViki5y5Z5RZQ';


var servers =  {};
bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', msg=>{
    if (msg.content === "HELLO"){
        msg.reply('Hello Friend!'); 
    }
})
bot.on('message', msg=>{
    if (msg.content === "BYE"){
        msg.reply('Bye Friend!'); 
    }
})
bot.on('message', msg=>{
    if (msg.content === "Hello"){
        msg.reply('Hello Friend!'); 
    }
})
bot.on('message', msg=>{
    if (msg.content === "Bye"){
        msg.reply('Bye Friend!'); 
    }
})
bot.on('message', msg=>{
    if (msg.content === "hello"){
        msg.reply('Hello Friend!'); 
    }
})
bot.on('message', msg=>{
    if (msg.content === "bye"){
        msg.reply('Bye Friend!'); 
    }
})
bot.on('message', msg=>{
    if (msg.content === "HI"){
        msg.reply('Hi Friend!'); 
    }
})
bot.on('message', msg=>{
    if (msg.content === "Hi"){
        msg.reply('Hi Friend!'); 
    }
})
bot.on('message', msg=>{
    if (msg.content === "hi"){
        msg.reply('Hi Friend!'); 
    }
})
bot.login(token);
