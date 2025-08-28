module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "HAMZI X FATI",
	description: "Restart Bot",
	commandCategory: "system",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
	const { threadID, messageID } = event;
	return api.sendMessage(`𝐁𝐎𝐓 𝐈𝐒 𝐑𝐄𝐒𝐓𝐒𝐓  🤖 👈 ●============================================================●𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 𝐇𝐀𝐌𝐙𝐈 𝐗 𝐅𝐀𝐓𝐈 𝐁𝐨𝐭 😇👈
=𝐎𝐰𝐧𝐞𝐫 ➻    🌹 𝐇𝐚𝐦𝐳𝐢 𝐓𝐫𝐢𝐜𝐤𝐞𝐫 🌹
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 𝐥𝐢𝐧𝐤 😊 👈👈👈👈👈 ____________𝐇𝐀𝐌𝐙𝐈 𝐓𝐑𝐈𝐂𝐊𝐄𝐑 :- ☞ https://www.facebook.com/profile.php?id=61565881853433&mibextid=ZbWKwL
●============================================================● 𝐁𝐎𝐓 𝐑𝐄𝐒𝐓𝐒𝐓 𝐇𝐎 𝐑𝐄𝐇𝐀 𝐇𝐀𝐈 𝐏𝐋𝐙 𝐖𝐀𝐈𝐓`, threadID, () => process.exit(1));
		}
