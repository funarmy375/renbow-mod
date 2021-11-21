const { MessageEmbed, Role } = require("discord.js");
const qdb = require("quick.db");
const kdb = new qdb.table("Kayıt");

exports.execute = async (client, message, args) => {
    let embed = new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setFooter(client.config.footer).setColor("RANDOM");

    if(!message.member.roles.cache.has(client.config.register.yetkili))
    if(message.author.id !== client.config.sahip)
    if(!message.member.roles.cache.has(client.config.owner)) return message.react(client.config.emoji.red);
    let tag = client.config.taglar.tag;
    let tag2 = client.config.taglar.tag2;
    
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!user) return message.react(client.config.emoji.red);

    if(client.config.register.kız && client.config.register.kız.some(rol => user.roles.cache.has(rol))) { 
    message.channel.send(embed.setDescription(`Belirtilen Üye Zaten Daha Önceden Kayıt Olmuştur`)).catch(e => { });
  
    } else {
  
    let isim = args[1];
    let yas = args[2];
    if(!isim) return message.react(client.config.emoji.red);
  
    kdb.add(`teyit.${message.author.id}.kiz`, +1);
    qdb.add(`bayanKayit_${message.author.id}`, 1)
    qdb.add(`toplamKayit_${message.author.id}`, 1)
     
    qdb.set(`erol.${user.id}`, `@Kız`)
    kdb.push(`kullanici.${user.id}.kayıt`, {
    isim: isim,
    yas: yas ? `| ${yas}` : ``,
    });

    let kayıt = kdb.get(`kullanici.${user.id}.kayıt`) || [];
    kayıt = kayıt.reverse();
    let isimler = kayıt.length > 0 ? kayıt.map((value, index) => `• ${value.isim} ${value.yas}`).join("\n") : "Daha Önce Böyle Bir Üye Kayıt Olmamıştır!";
 
    if(client.config.taglar.TagVarYok) {

    if(user.roles.cache.has(client.config.taglar.tagrol)) {
        await user.roles.add(client.config.register.kız).catch(e => { });
        await user.roles.remove(client.config.register.kayıtsız).catch(e => { }); 
        await user.setNickname(`${tag} ${isim.charAt(0).toUpperCase() + isim.slice(1).toLowerCase()}${yas ? ` | ${yas}` : ``}`).catch(e => { });
        message.channel.send(embed.setDescription(`
        • ${user} adlı kullanıcı başarılı şekilde kayıt işlemi tamamlandı.
      
        • **Yetkili:** ${message.member}
        • **Üyenin Yeni İsmi:** \`${tag} ${isim}${yas ? ` | ${yas}` : ``}\`
      
        • Kayıt olan kullanıcının diğer isimleri;
        ${isimler}
        `)).catch(e => { });
    } else {

        await user.roles.add(client.config.register.kız).catch(e => { });
        await user.roles.remove(client.config.register.kayıtsız).catch(e => { }); 
        await user.setNickname(`${tag2} ${isim.charAt(0).toUpperCase() + isim.slice(1).toLowerCase()}${yas ? ` | ${yas}` : ``}`).catch(e => { });
        message.channel.send(embed.setDescription(`
        • ${user} adlı kullanıcı başarılı şekilde kayıt işlemi tamamlandı.
      
        • **Yetkili:** ${message.member}
        • **Üyenin Yeni İsmi:** \`${tag} ${isim}${yas ? ` | ${yas}` : ``}\`
      
        • Kayıt olan kullanıcının diğer isimleri;
        ${isimler}
        `)).catch(e => { });

    } } else {
        await user.roles.add(client.config.register.kız).catch(e => { });
        await user.roles.remove(client.config.register.kayıtsız).catch(e => { }); 
        await user.setNickname(`${tag} ${isim.charAt(0).toUpperCase() + isim.slice(1).toLowerCase()}${yas ? ` | ${yas}` : ``}`).catch(e => { });
        message.channel.send(embed.setDescription(`
        • ${user} adlı kullanıcı başarılı şekilde kayıt işlemi tamamlandı.
      
        • **Yetkili:** ${message.member}
        • **Üyenin Yeni İsmi:** \`${tag} ${isim}${yas ? ` | ${yas}` : ``}\`
      
        • Kayıt olan kullanıcının diğer isimleri;
        ${isimler}
        `)).catch(e => { });

    }

}}
exports.conf = {
    command: "kız", // Asıl komutumuz
    description: "Belirtilen kişiyi kız olarak kayıt eder", // Komut açıklamamız
    aliases: ["k", "women"] // Komutumuzun yardımcıları
  }