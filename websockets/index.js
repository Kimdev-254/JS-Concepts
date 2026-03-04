const WebSocket = require('ws');

const socket = new WebSocket('ws://localhost:3000');

socket.on('open', () => {
    console.log('Connected to server!');
    socket.send('Hello from client!');
});

socket.on('message', (data) =>{
    console.log(`Message from server: ${data}`);
    
});
socket.on('error', (error) => {
    console.error('Connection error:', error.message);
    
});
socket.on('close', () => {
    console.log('Connection closed by server');
});