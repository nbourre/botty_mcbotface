
module.exports = async function (msg, args) {

   const index = Math.floor(Math.random() * 6) + 1;
   msg.reply (`You rolled a ${index}`);
}
