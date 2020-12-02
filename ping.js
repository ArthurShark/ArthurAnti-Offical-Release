module.exports = {
    name: "ping",
    aliases: ["ping", "p"],
    description: "Pings the server",

    execute(message) {
        message.channel.send('Pinging...').then(pingMessage => {

            const start = message.createdTimestamp;
            const end = pingMessage.createdTimestamp;
            const subtraction = end - start;

            pingMessage.edit(` Ping is ${subtraction} ms.`);
        });
    }
}