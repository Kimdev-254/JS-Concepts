// handling incoming connections and echo back messages

const {WebSocketServer} = require('ws');

// Create a WebSocket server that listens on port 3000
const wss = new WebSocketServer({ port: 3000 });

wss.on('connection', (ws) => {
    console.log('New client connected!');
    
    //Send a welcome message
    ws.send('Welcome to the websocket server!');

    //Echo back any messages received from the client
    ws.on('message', (data) =>{
        console.log(`Recieved: ${data}`);
        ws.send(`Server recieved: ${data}`);
    });

    ws.on('close', () => console.log('Client disconnected'));

});
console.log('Server is running on ws://localhost:3000');
