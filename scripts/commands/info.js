module.exports.config = {
    name: "info",
    version: "1.0.0",
    permission: 0,
    credits: "MAHI",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Manila").format("『D/MM/YYYY』 【HH:mm:ss】");
var link = ["https://i.imgur.com/y834Vyh.jpeg", "https://i.imgur.com/y834Vyh.jpeg", "https://i.imgur.com/y834Vyh.jpeg", "https://i.imgur.com/y834Vyh.jpeg", "https://i.imgur.com/y834Vyh.jpeg", "https://i.imgur.com/i2CtWxX.jpeg", "https://i.imgur.com/i2CtWxX.jpeg", "https://i.imgur.com/i2CtWxX.jpeg"];
var callback = () => api.sendMessage({body:`➢ Admin and Bot Information

⁂ Bot Name: ${global.config.BOTNAME}

✧ Bot Admin: 61557026699388

♛ Bot Admin Link: https://www.facebook.com/mahitsuyiyi

❂ Bot Prefix: ${global.config.PREFIX}

✫ Bot Owner: 𝐀𝐃𝐈 𝐔𝐅𝐓𝐀 𝐌𝐀𝐇𝐈

➟ UPTIME

✬ Today is: ${juswa} 

➳ Bot is running ${hours}:${minutes}:${seconds}.

✫ Thanks for using ${global.config.BOTNAME} Bot!`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
