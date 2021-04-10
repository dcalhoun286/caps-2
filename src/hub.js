'use strict';

require('dotenv').config();

const PORT = process.env.PORT || 3333;

const io = require('socket.io')(PORT);

const caps = io.of('/caps');

function timestamp() {
  new Date().toDateString();
}

io.on('connection', (socket) => {

  console.log(`${socket.id} has joined the server`);
  
});

caps.on('connection', (socket) => {
  socket.on('pickup', (payload) => {
    // console.log(payload);
    socket.broadcast.emit('pickup', payload);
    // console.log(`STATUS: order # ${payload.orderId} ready for pickup`)
  });
});