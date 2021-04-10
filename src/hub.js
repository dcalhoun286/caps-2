'use strict';

require('dotenv').config();

const PORT = process.env.PORT || 3333;

const io = require('socket.io')(PORT);

const caps = io.of('/caps');

io.on('connection', (socket) => {

  console.log(`${socket.id} has joined the server`);
  
});

caps.on('connection', (socket) => {
  socket.on('pickup', (payload) => {
    socket.broadcast.emit('pickup', payload);
    console.log(`STATUS: order # ${payload.orderId} ready for pickup`)
  });

  socket.on('in-transit', (payload) => {
    setTimeout(() => {
      
      socket.broadcast.emit('abcde', payload);
      console.log(`STATUS: order # ${payload.orderId} is in transit`);

    }, 500);

  });

  socket.on('delivered', (payload) => {

    console.log(`STATUS: delivery complete for order # ${payload.orderId}`);

    socket.broadcast.emit('delivered', payload);
  });

});
