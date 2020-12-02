const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Playing Hypixel Skyblock');
    client.user.setActivity('Hypixel Skyblock', { type: "PLAYING"})
});


client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('783373364843905095').send(`Welcome <@${guildMember.user.id}> to our server! Make sure to check out the rules channel!`)
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === 'youtube'){
        client.commands.get('youtube').execute(message, args);
    } 

    if(command === 'help'){
        client.commands.get('help').execute(message, args);
    } 
    
    if(command === 'twitter'){
        client.commands.get('twitter').execute(message, args);
    } 
    
    if(command === 'shit'){
        client.commands.get('shit').execute(message, args);
    }

    if(command === 'discordvszoom'){
        client.commands.get('discordvszoom').execute(message, args);
    }
    
    if(command === 'creeper'){
        client.commands.get('creeper').execute(message, args);
    }
    
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }

    if(command === 'meme'){
        client.commands.get('meme').execute(message, args);
    }
});


client.on('message', message => {
    
    
    
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();



    if(command === 'clean'){
        client.commands.get('clean').execute(message,args);
    } else if(command === 'kick'){
        if(message.member.roles.cache.has('782722037655142421'))
        client.commands.get('kick').execute(message,args);
    } else if(command === 'ban'){
        if(message.member.roles.cache.has('782721910492495938'))
        client.commands.get('ban').execute(message,args);
    } else if(command === 'lock'){
        client.commands.get('lock').execute(message,args);
    }
});

client.login('NzgyNzI0MDM5Mjg1ODAxMDAx.X8QWkQ.PZs0xzkM4VnEE3LsgTzMqEJBfBw');