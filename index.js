require("dotenv").config();

const Discord = require("discord.js");
const config = require("./config.json");

const commandHandler = require("./commandHandler");

console.log('Starting the bot');

const client = new Discord.Client();

client.on('ready', readyDiscord);
client.on ("message", commandHandler);

function readyDiscord() {
  console.log('Bot ready! 🤖');
}

client.login(process.env.BOT_TOKEN);
