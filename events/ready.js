module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        client.user.setActivity('my code',{type:'WATCHING'});
        console.log(`Ready! Logged in as ${client.user.tag}`);
    },
};