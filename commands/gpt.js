const endpoint = "https://api.openai.com/v1/engines/davinci-codex/completions";
const apiKey = process.env.GPT_TOKEN;

module.exports = async function (msg, args) {
    //const prompt = message.content.slice(9);

    msg.reply(`${endpoint}`);
}