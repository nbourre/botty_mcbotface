require("dotenv").config();

const Discord = require("discord.js");
const config = require("./config.json");

const prefix = "!";
const chan_test_id = '801899863183720479';

console.log('Starting the bot');

const client = new Discord.Client();

client.on('ready', readyDiscord);
client.on ("message", gotMessage);

function readyDiscord() {
  console.log('Bot ready! 🤖');
}

function gotMessage(message) {
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;
  if (message.channel.id != chan_test_id) {
    message.reply (`STP! Faire les tests dans le canal <#${chan_test_id}>`);
    return;
  }

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply (`Pong! This message had a latency of ${timeTaken}ms.`);
  }

  if (command === "dice") {
    const index = Math.floor(Math.random() * 6) + 1;
    message.reply (`You rolled a ${index}`);
  }
}

client.login(process.env.BOT_TOKEN);
