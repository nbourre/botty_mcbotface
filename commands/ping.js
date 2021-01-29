module.exports = async function (msg, args) {

  const timeTaken = Date.now() - msg.createdTimestamp;
  msg.reply (`Pong! This message had a latency of ${timeTaken}ms.`);

}
