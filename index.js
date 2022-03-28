const botconfig = require(`./botconfig.json`);
const colors = require(`./colors.json`);
const discord = require('discord.js');
const client = new discord.Client();


client.once('ready', () => {
    console.log(`Bot Onlin Shod`);
    const server = client.guilds.cache.get("951217571850485811")
    client.user.setActivity(`${server.memberCount} Memeber Of IRWolrd RolePlay ®`, { type: 'WATCHING' })
});

client.on('message', message => {
    if (message.author.bot || message.channel.type == "dm") return;
    const cmd = message.content.toLocaleLowerCase()
    const messageArray = cmd.split(" ")
    const command = messageArray[0]
    if (command == "/ip")
        message.reply("87.248.152.196:22003")


});


client.on('guildMemberAdd', member => {
    let welcomeChannel = client.channels.cache.get("957442152189808680")
    if (welcomeChannel) {

        let welcomeEmbed = new discord.MessageEmbed()
        if (member.user) {

            if (member.user.client) {

                welcomeEmbed.setColor(colors.red)
                welcomeEmbed.setAuthor('IRWolrd RolePlay ®', 'https://cdn.discordapp.com/attachments/931918838004613150/957983568183849000/main_logo.png')
                welcomeEmbed.setDescription(`
                    Hey  <@${member.user.id}> Welcome To IRWolrd RolePlay ®`)
                welcomeEmbed.setThumbnail(member.user.displayAvatarURL())
                welcomeEmbed.setFooter('IRWolrd RolePlay ®', 'https://cdn.discordapp.com/attachments/931918838004613150/957983568183849000/main_logo.png');
                welcomeChannel.send(welcomeEmbed)
            }
        }
    } else {
        console.log("Welcome Channel Yaft Nashod")
    }
})
client.login(botconfig.token);