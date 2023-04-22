const { Client, GatewayIntentBits, Partials, Collection } = require("discord.js");
const { Guilds, GuildMembers, GuildMessages} = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;


const client = new Client({intents: [131071]});

client.config = require("./config.json");

client.login(client.config.token).then(() => {
    console.log(`Cliente ${client.user.username} se ha iniciado`);
    client.user.setActivity(`Programando`);
}).catch((err) => console.log(err));