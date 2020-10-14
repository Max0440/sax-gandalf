const WebSocketServer = require('ws').Server
const wss = new WebSocketServer({ port: 8081 });

wss.on('connection', ((ws) => {
    ws.on('message', (message) => {
        console.log(`received: ${message}`);

        wss.clients.forEach((client) => {
            if (client != ws) {
                client.send(message);
            }
        });
    });

    //ping
    setInterval(() => {
        wss.clients.forEach((client) => {
            if (client != ws) {
                client.send('Oh hi Marc');
            }
        });
    }, 10000);
}));

