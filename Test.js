const Asena = require('../events');
const{MessageType} = require('@adiwajshing/baileys');

Asena.addCommand({pattern: 'komut', fromMe: true}, (async (message, match) => {

    await message.sendMessage('Bu bir testtir!')
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('test tamamlandi!')
