const Insta = require('@androz2091/insta.js');
const client = new Insta.Client();
const fetch = require("node-fetch");
 
client.on('connected', () => {
    console.log(`Logged in as ${client.user.username}`);
});
 
client.on('messageCreate', (message) => {
    if (message.author.id === client.user.id) return
    message.markSeen();
    fetch("https://api.udit.gq/api/chatbot?message=" + message.content)
    .then(res => res.json())
    .then(json => {
      if(!json.message) return;
      return message.reply(json.message);
    }).catch(err => {});
});
 
client.login('USERNAME', 'PASSWORD'); 
