const prefix = '!';
const chan_test_id = '801899863183720479';

const dice = require("./commands/dice.js");
const ping = require("./commands/ping.js");
const getUsers = require("./commands/getUsers.js");

const commands = {
  ping,
  dice,
  getUsers,
};

module.exports = async function (message) {
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;
  if (message.channel.id != chan_test_id) {
    message.reply (`STP! Faire les tests dans le canal <#${chan_test_id}>`);
    return;
  }

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  commands[command](message, args);

  return;


}
