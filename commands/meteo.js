const axios = require('axios');

// function that get the weather of a city using
// axios wttr.in/Shawinigan?M&lang=fr
module.exports = async function (msg, args) {

    const response = await axios.get(`https://wttr.in/Shawinigan?M&lang=fr`);

    msg.reply(response.data); 
}
  