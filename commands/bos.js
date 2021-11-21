const { MessageEmbed } = require("discord.js");
const qdb = require("quick.db")
const sicil = new qdb.table("tmute");
const ms = require('ms');
const moment = require("moment");
require("moment-duration-format")
require("../rainbow.js");
exports.execute = async (client, message, args) => {    
    message.channel.send(`☽`)

};
exports.conf = {
  command: "tag", // Asıl komutumuz
  description: "", // Komut açıklamamız
  aliases: ["tag"] // Komutumuzun yardımcıları
}
