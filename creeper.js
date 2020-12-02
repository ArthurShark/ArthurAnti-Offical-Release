module.exports = {
    name: 'creeper',
    description: "this is a creeper command!",
    execute(message, args){
        message.channel.send('Aw man');
    }
}