const { WebSocketServer } = require('ws');
const wss = new WebSocketServer({ port: 3000 });

wss.on('connection', (ws)=>{
    console.log('Client Connected');

    ws.on('message', (data)=>{
        console.log(`Recieved: ${message}`);
        
        //Broadcast to Everyone including the sender
        wss.clients.forEach((client) =>{
            // Check if the client's connection is still open
            if (client.readState === 1) {  // 1 means OPEN
                client.send(`Broadcast: ${message}`);
            }
        });
    });
    
    ws.on('close', () => console.log('Client Disconnected'));
})