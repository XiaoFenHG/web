const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    console.log('A user connected');
    
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
