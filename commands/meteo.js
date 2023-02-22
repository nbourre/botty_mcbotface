const axios = require('axios');

// function that get the weather of a city using
// axios wttr.in/Shawinigan?M&lang=fr
module.exports = async function (msg, args) {
    const endpoint = "https://wttr.in/Shawinigan?T&M&lang=fr&An";
    const response = await axios.get(endpoint);
    console.log(response.data);

    msg.reply(response.data); 
}
  