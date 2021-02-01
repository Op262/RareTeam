const discord = require('discord.js');
const client = new discord.Client();
const config = require("./config.json");
const token  = process.env.TOKEN || config.token
const prefix = config.prefix
function run(){
    client.login(token)
}
client.on("ready", () => {
    console.log(` I am Ready [${client.user.username}]`)
    client.user.setPresence({
        activity:({
            type:"PLAYING",
           name:`I am Ready For send report`
        })
    })
});
// client.on("message", function(msg){
//     if(msg.content === "hello"){
//         msg.channel.send("hi");
//     }
// })
// client.on("message", msg =>{
//     if(msg.content === `${prefix}server`){
//         let embed = new discord.MessageEmbed()
//         .setColor("33C1FF")
//         .setThumbnail(msg.guild.iconURL())
//         .setDescription("Server Info")
//         .addField("Server Name", msg.guild.name)
//         .addField("member Count", msg.guild.memberCount)
//         .addField("You Joined At", msg.member.joinedAt)
//         .addField("Server CreatedAt", msg.guild.createdAt)
//         return msg.channel.send(embed)
//     }
// })
// client.on("message", msg => {
//     if(msg.content === `${prefix}my info`){
//         let bicon = msg.member.user.avatarURL()
//         let embed = new discord.MessageEmbed()
//         .setDescription("Your Info")
//         .setThumbnail(bicon)
//         .addField("your name is",msg.member.user.username)
//         .addField("your id is", msg.member.user.id)
//         .addField("your tag", msg.member.user.tag)
//         return msg.channel.send(embed)
//     }
// })

client.on("message", msg => {
    let args = msg.content.substring(prefix.length).split(' ');

    switch(args[0]){

        case 'report':
            msg.delete(3000);
            let target = msg.mentions.members.first() ||msg.guild.members.cache.get(args[0]);
            if(!target) return msg.channel.send('Couldn"t find user').then(msg.delete({timeout: 3000}));
            
            let reason = args.slice(1).join(" ");
            if(!reason) return msg.channel.send(`Please provide a reason for reporting **${target.user.username}**`).then(msg.delete({timeout: 3000}));

            ;
            let embed = new discord.MessageEmbed()
            .setDescription("Reports")
            .setThumbnail(msg.member.user.avatarURL())
            .setColor("33C1FF")
            .addField("Reported User", `${target} with ID:${target.id}`)
            .addField("Reported By", `${msg.author} with ID ${msg.author.id}`)
            .addField("Channel", msg.channel)
            .addField("time", msg.createdAt)
            .addField("Reason", reason)
            let reportChannel = msg.guild.channels.cache.find(x => x.name ==="reports");
           if(!reportChannel) return msg.channel.send("couldn't find the channel")
           msg.channel.send('Your report has been processed')
           reportChannel.send(embed)
            break;
            }
    client.on("message", msg => {
        if(msg.content === "hello"){
            msg.reply("hi baby")
        }
    })
  
})
// git push --set-upstream rareteam master
// ----run the bot----
run()
// -------------------