const { Client, GatewayIntentBits, Events } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once(Events.ClientReady, (bot) => {
  console.log(`CYBER GUARD aktivdir: ${bot.user.tag}`);
});

client.on(Events.GuildMemberAdd, async (member) => {
  console.log(`Yeni üzv: ${member.user.tag} | Server: ${member.guild.name}`);
});

client.on(Events.MessageCreate, (message) => {
  if (message.author.bot) return;

  console.log(
    `[MESAJ] ${message.guild?.name || "DM"} | ${message.author.tag}: ${message.content}`
  );

  if (message.content === "!ping") {
    message.reply("🏓 CYBER GUARD aktivdir!");
  }
});

client.on(Events.MessageDelete, (message) => {
  if (!message.guild || message.author?.bot) return;

  console.log(`[SİLİNƏN MESAJ] ${message.author?.tag || "Naməlum"}: ${message.content || "Məzmun yadda saxlanmayıb"}`);
});

client.login(process.env.DISCORD_TOKEN);
