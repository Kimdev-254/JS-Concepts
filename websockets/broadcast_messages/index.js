const WebSocket = require('ws'); // Required for Node.js environments

// Fix: Note the space in "new WebSocket"
const socket = new WebSocket('ws://localhost:3000');

socket.on('open', () => {
  console.log('Connected to server!');
  socket.send('Hello from the client!');
});

socket.on('message', (data) => {
  console.log(`Message from server: ${data}`);
});

socket.on('error', (err) => {
  console.error('Connection error:', err.message);
});
