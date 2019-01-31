const Discord = require("discord.js");
const client = new Discord.Client();
const readline = require('readline');




function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}

var prefixfix = "!l";
var token = " ";

client.on("ready", () => {
    console.log(`legitworks | Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  client.user.setActivity(`Type !lnew to open ticket | ${client.guilds.size} servers`);
});

client.on("guildCreate", (guild) => {
client.user.setActivity(`!l help / !lnew | ${client.guilds.size} servers`);
    guild.owner.user.send(`Hello! I'm legitworks!\nThanks for adding me to your guild!\n\nView all of my commands with \`!l help\`.\nLearn more about me with \`!labout\`.\n\n**About:**legitworks is a simple Discord support ticket bot that aims to provide easy to use mod and support functions for all servers!\n\n\Enjoy! ~legitlike123#9690 Synex DEV TEAM™ (http://synex.xyz/) or (http://legitworks.xyz)`);
});


client.on("message", (message) => {
    const args = message.content.slice(prefixfix.length).trim().split(/ +/g)
    
    if (message.content.toLowerCase().startsWith(prefixfix + `about`)) {
        if (message.channel.type == "dm") return message.channel.send("You can't use this command through DMs!")
        const embed = new Discord.RichEmbed()
        .setTitle('About me!')
        .setColor('RANDOM')
        .setDescription(`Hello! I'm legitworks, the Discord bot for super cool support ticket stuff and more! I am Developed by legitlike123#9690`)
        .setFooter("legitworks ~ Synex Development Team(legitlike123#9690) All rights reserved™")
        message.channel.send({ embed: embed });
      }
    }
    ,
    )


client.on("message", (message) => {
  if (!message.content.startsWith(prefixfix) || message.author.bot) return;
  
  

  if (message.content.toLowerCase().startsWith(prefixfix + `help`)) {
    if (message.channel.type == "dm") return message.channel.send("You can't use this command through DMs!")
    const embed = new Discord.RichEmbed()
    .setTitle(`:mailbox_with_mail: legitworks Help`)
    .setColor('RANDOM')
    .setDescription(`Here is list of all commands`)
    .addField(`Tickets`, `[${prefixfix}new]() > Opens up a new ticket and tags the Support Team\n[${prefixfix}close]() > Closes a ticket that has been resolved by Support Team or been opened by accident`)
    .addField(`Other`, `[${prefixfix}help]() > Shows you this help menu your reading\n[${prefixfix}ping]() > Pings the bot to see how long it takes to react\n[${prefixfix}about]() > Tells you all about legitworks\n[${prefixfix}8ball]() > Play with 8ball! BETA™`)
    .addField(`Memes`, `[${prefixfix}uno]() > Use your power of memes to block NO U from roblox kids!\n[${prefixfix}meme]() > Use random MEME ALPHA™`)
    .addField(`ADMIN`, `[${prefixfix}purge]() > Purge messages from user or from discord channel BETA™\n[${prefixfix}say]() > Write a message as a bot BETA™`)
    .setFooter("legitworks ~ Synex Development Team(legitlike123#9690) All rights reserved™")
    message.channel.send({ embed: embed });
  }

  if (message.content.toLowerCase().startsWith(prefixfix + `ping`)) {
    if (message.channel.type == "dm") return message.channel.send("You can't use this command through DMs!")
    message.channel.send(`Hoold on!`).then(m => {
    m.edit(`:ping_pong: Wew, made it over the ~waves~ ! **Pong!**\nMessage edit time is ` + (m.createdTimestamp - message.createdTimestamp) + `ms, Discord API heartbeat is ` + Math.round(client.ping) + `ms.`);
    });
}
if (message.content.toLowerCase().startsWith(prefixfix+ 'purge' )) {
    if (message.channel.type == "dm") return message.channel.send("You can't use this command through DMs!")
    if(!message.member.hasPermission("MANAGE_MESSAGES"))
   {
       message.channel.send("You can't purge chat boi");
       return;
   }
    const user = message.mentions.users.first();
const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
if (!amount) return message.reply('Must specify an amount to delete!');
if (!amount && !user) return message.reply('Must specify a user and amount, or just an amount, of messages to purge!');
// Fetch 100 messages (will be filtered and lowered up to max amount requested)
message.channel.fetchMessages({
 limit: 100,
}).then((messages) => {
 if (user) {
 const filterBy = user ? user.id : Client.user.id;
 messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
 }
 message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
});
}

if (message.content.toLowerCase().startsWith(prefixfix+ '8ball' )) {
    if (message.channel.type == "dm") return message.channel.send("You can't use this command through DMs!")
    const args = message.content.slice(prefixfix.length).trim().split(/ +/g)
    var saying = ["Yes", "No", "Maybe"]
    var result = Math.floor((Math.random() * saying.length + 0));
   const embed = new Discord.RichEmbed()
   .setColor('RANDOM')
   .setTitle('8ball command :8ball:')
   .addField(args, saying[result])
   .setFooter("legitworks ~ Synex Development Team(legitlike123#9690) All rights reserved™")
   message.channel.send({embed: embed})
}
if (message.content.toLocaleLowerCase().startsWith(prefixfix+ 'uno')) {
    if (message.channel.type == "dm") return message.channel.send("You can't use this command through DMs!")
    var say = ["http://synex.xyz/memes/blue.png", "http://synex.xyz/memes/green.png", "http://synex.xyz/memes/red.png", "http://synex.xyz/memes/yellow.png"]
    var oof = Math.floor((Math.random() * say.length + 0));
message.channel.send(say[oof])
}

if (message.content.toLocaleLowerCase().startsWith(prefixfix+ 'meme')) {
    if (message.channel.type == "dm") return message.channel.send("You can't use this command through DMs!")
    var memes = ["https://cdn.discordapp.com/attachments/527569970792628237/540257754728759296/image0.jpg", "http://synex.xyz/memes/ok.png", "https://i.kym-cdn.com/photos/images/original/001/365/826/f2f.jpg", "http://www.synex.xyz/memes/witcher3.png", "https://cdn.discordapp.com/attachments/540260217565347887/540268397083099166/9k.png", "https://images-cdn.9gag.com/photo/a3QLKr5_700b.jpg", "https://cdn.discordapp.com/attachments/540260217565347887/540271085233504283/0qr87wkr5rc11.png", "https://cdn.discordapp.com/attachments/532954014514675713/540271356693184515/fba91fae8756dad4663d9c2ebefe00e6.png"]
    var okhand = Math.floor((Math.random() * memes.length + 0));
message.channel.send(memes[okhand])
}


 
if (message.content.toLowerCase().startsWith(prefixfix+ 'say' )) {
    if (message.channel.type == "dm") return message.channel.send("You can't use this command through DMs!")
    if(!message.member.hasPermission("MANAGE_MESSAGES"))
    {
        message.channel.send("You can't purge chat boi");
        return;
    }
    var args = message.content.slice(prefixfix.length).split(/ +/g);
    
    let botmessage = args.slice(1).join(" ");
   message.delete().catch();
    message.channel.send(botmessage)
}


//test method
 //client.on("message", async message => {
    //if (message.content.toLowerCase().startsWith(prefixfix + `kick`)) {
    //if (message.channel.type == "dm") return message.channel.send("You can't use this command through DMs!")
  //var messageArray = message.content.split(" ");
 // var args = messageArray.slice(1);
  //  if(message.member.hasPermission("MANAGE_MESSAGES")) {
   //   var kickUser = message.guild.member(message.mentions.users.first());
    //  var kickReason = args.join(" ").slice(22);
    //  var helper = message.guild.member(kickUser).kickUser();
    //   message.guild.member(kickUser).kickUser().then(function(){
     //   console.log("bot broke oof")
     //   client.destroy()
     //  },)
     ///  message.channel.send(`${message.author} has kicked ${kickUser}\nReason: ${kickReason}`); 
      

//} else {
  //return message.channel.send("You don't have enough permissions to kick people!").then(function() {
  //  console.log('Failed to kick user')
  //},)}}
//}
//,)
   


//test method
if (message.content.toLowerCase().startsWith(prefixfix + `new`)) {
    if (message.channel.type == "dm") return message.channel.send("You can't use this command through DMs!")
    const reason = message.content.split(" ").slice(1).join(" ");
    if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
    if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send(`You already have a ticket open.`);
    message.guild.createChannel(`ticket-${message.author.id}`, "text").then(c => {
        let role = message.guild.roles.find("name", "Support Team");
        let role2 = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(role2, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        message.channel.send(`:white_check_mark: Your ticket has been created, #${c.name}.`);
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`Hey ${message.author.username}!`, `Please try explain why you opened this ticket with as much detail as possible. Our **Support Team** will be here soon to help.`)
        .setFooter("legitworks ~ Synex Development Team(legitlike123#9690) All rights reserved™")
        .setTimestamp();
        c.send({ embed: embed });
    }).catch(console.error);
}
if (message.content.toLowerCase().startsWith(prefixfix + `close`)) {
    if (message.channel.type == "dm") return message.channel.send("You can't use this command through DMs!")
    if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);

    message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`!lconfirm\`. This will time out in 30 seconds and be cancelled.`)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === '!lconfirm', {
        max: 1,
        time: 30000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        })
        .catch(() => {
          m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
              m2.delete();
          }, 3000);
        });
    });
}
});
client.login(process.env.token);
