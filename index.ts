// 

import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';

const app = express()
const server = createServer(app);
const io = new Server(server, {cors: {
    origin: '*' //add cors to this
  },});



io.on('connection', (socket) => {
  console.log('User connected!')
  socket.emit('connection', ()=> {})
})



server.listen(3300, () => {
  console.log('server running at http://localhost:3300');
});