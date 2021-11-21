global.client = client;

//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma
//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma
//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma
//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma
//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma
//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma
//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma
//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma
//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma
//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma
//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma
//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma
//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma
//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma
//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma
//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma
//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma
//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma
//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma
//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma
//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma
//DOSTUM MutlakaOku yerini oku yoksa gelip bana neden çalışmıyor diye laf atma

client.config = {

  token : "", //Bot Token
  prefix : ".", //Bot Prefix
  guildid : "830748991325995058", //Sunucu ID
  sahip : "741364768472039495", //Sahip ID
  footer : "Renbow & Elrond ❤️ x sunucu ", //Bot Bio
  status : "idle", //online //çevrim içi || idle // boşta || dnd //rahatsız etmeeyin || invisible /görünmez
  botses : "833385404832546836", //Botun gireceği ses kanal id si  

  owner : "744501334518136905", //Sunucu Genel Kurucusu
  cezapuan : "832162138235469844", //Ceza Puan Log Kanalı
  booster : "831494219599183892", //Booster Rol


  taglar : {
    tag : "Ψ", //Tag 1
    TagVarYok : false, //False ise sadece tagı alır kayıtlarda eğer true ise 2. tagı aktif eder tag rolü olmayana tag2 verir
    tag2 : "", //Tag 2
    tagrol : "911977180618190869", //Tag Rolü
  },

  SadeceTaglı : false, //False ise herkes kullana bilir //True ise sadece taglı ve booster kullana bilir

  chatmute : {
    yetkili : "911977180634943535", //Chat Mute Yetkili
    log : "832162138235469844", //Chat Mute
    rol : "911977180425248783", //Chat Mute Rolü
  },
  
  voicemute : { 
    yetkili : "911977180634943535", //Voice Mute Yetkili
    log : "832162138235469844", //Voice Mute
    rol : "911977180425248783", //Voice Mute Rolü
  },

  meeting : {
    log : "911977182711152670", //Meeting Ses Kanalı
  },

  jail : {
    yetkili : "911977180634943536", //Jail Yetkili
    rol : "911977180593008644", //Jailli Rol
    log : "", //Jail Log
  },

  ban : {
    forceban : "911977180806926487", //Force Ban Yetkili
    banyetkili : "911977180634943537", //Normal Ban Yetkilisi
    log : "832162138235469844", //Logu
    banlimit : 3, //Ban Limitin Kaç olacağını yazınız Örnek (3 : yetkili 3 kere ban attıktan sonra yetkisini çeker)
  },

  allmute : {
    yetkili : "911977180806926487", //All Mute Yetkili
  },

  karaliste : {
    yetkili : "911977180806926487", //Kara Liste Yetkili 
    log : "832162138235469844", //Kara liste Log
  },
  cezabilgi : {
    yetkili : "911977180806926487", //Ceza Bilgi Yetkili
  },
  
  yetkilisay : {
    yetkili : "911977180806926487", //Komutu Kullanacak Yetkili
    altyetkili : "911977180634943533", //En Alt Yetkili
  },

  kilit : {
    yetkili : "911977180806926487", //Kanal Kilit Yetkili
  },

  guildMemberAdd : {
    guvenli : "830749458324389928", //7 Gün Önce Açılmış Hesap Log
    forceban : "832162138235469844", //Kalıcı Ban log (Kalıcı ban yemiş üyenin banı açılmıştır ve sunucuya tekrar girese ban atar bunu logu)
    jail : "", //Jailli üye çık gir yaparsa
  },

  trasport: {
    yetkili : "911977180634943531", //Çek Yetkili
  },

  register : {
    erkek : ["911977180492349527,911977180492349526,911977180492349525"], //Erkek Rollerini Sırayla Giriniz
    kız : ["911977180492349528,911977180492349529,911977180525916190"], //Kız Rollerini Tek Tek Giriniz
    kayıtsız : "911977180425248786", //Kayıtsız Rol ID
    yetkili : "911977180634943533", //Register Yetkili
  },

  emoji : {

    sıfır : "0", //0 Emoji Örnek : <a:sıfır:1234567891011>
    bir : "1", //1 Emoji Örnek : <a:bir:1234567891011>
    iki : "2", //2 Emoji Örnek : <a:iki:1234567891011>
    üç : "3", //3 Emoji Örnek : <a:üç:1234567891011> 
    dört : "4", //4 Emoji Örnek : <a:dört:1234567891011>
    beş : "5" , //5 Emoji Örnek : <a:beş:1234567891011>
    altı : "6", //6 Emoji Örnek : <a:altı:1234567891011>
    yedi : "7", //7 Emoji Örnek : <a:yedi:1234567891011>
    sekiz : "8", //8 Emoji Örnek : <a:sekiz:1234567891011>
    dokuz : "9", //9 Emoji Örnek : <a:dokuz:1234567891011>

    onay : "✅", //Onay Emoji ID Sayı Olarak Örnek : onay : "1123023109213",
    red : "❌", //Red Emoji ID Sayı Olarak Örnek : onay : "1123023109213",
  },

}
