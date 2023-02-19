const axios = require('axios');

const endpoint = "https://api.openai.com/v1/completions";
const apiKey = process.env.GPT_TOKEN;
const command = "!gpt ";

module.exports = async function (msg, args) {
  var response = "STP, écris une question ou demande une histoire.";

  // if (args) {
  //   if (args[0] == "getModels") {
  //     response = await getModels();
  //   }
  //   else {

  //   }
  // }

  const prompt = msg.content.slice(command.length);

  if (prompt) {
    response = await getChatGPTResponse(prompt);
    //msg.channel.send(response);
    
  }

  msg.reply(response);

  
}

async function getModels() {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
  };

  const response = await axios.get("https://api.openai.com/v1/models", {headers: headers});

  return response.data.text;
}

async function getChatGPTResponse(prompt) {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    };

  const data = {
      'model': "text-davinci-003",
      'prompt': prompt,
      'temperature': 0.7,
      'max_tokens': 500,
      'top_p': 1,
      'frequency_penalty': 0,
      'presence_penalty': 0
    };
    
    const response = await axios.post(endpoint, data, { headers: headers });

    if (response) {
        return response.data.choices[0].text;
    }
        
    
    return "Si ce message apparaît, il y a eu un problème!";
  }