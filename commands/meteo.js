const axios = require('axios');

// function that get the weather of a city using
// axios wttr.in/Shawinigan?M&lang=fr
module.exports = async function (msg, args) {
    const endpoint = "https://wttr.in/Shawinigan?T&M&lang=fr&AnF0";
    const response = await axios.get(endpoint);

    let length = response.data.length;

    console.log(`Data length : ${length}}`);

    if (length > 2000) {
        msg.reply(`Trop de données à afficher (${length} octets max 2000). Endpoint : ${endpoint}`);
        return;
    }   

    msg.reply(response.data); 
}
  