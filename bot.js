const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

if (message.content.includes("Antonie")) {
  message.channel.send("Eep! I-I'll be over there if y-you need me! *Bye*");
 } else
 
if (message.content.includes("Inari")) {
  message.channel.send("How about I set you ablaze instead, snake?");
 } else
 
if (message.content.includes("Eliana")) {
  message.channel.send("Ohhhhhhh!!!! ElianaaaaAAAAA!!!!! COME HEREEEEEE I NEED YOU");
 } else
 
if (message.content.includes("Leo")) {
  message.channel.send("Where is that cat?");
 } else
 
if (message.content.includes("Echo")) {
  message.channel.send("Let me aT HER");
 } else
 
if (message.content.includes("Akkai")) {
  message.channel.send("Give me fire!");
 } 
  
  
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
