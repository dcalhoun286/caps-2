'use strict';

require('dotenv').config();

const PORT = process.env.PORT || 3333;

const io = require('socket.io')(PORT);

const deliveries = io.of('/deliveries');


// How does this server handle each connection?
// This is like the switchboard operators

function timestamp() {
  new Date().toDateString();
}

io.on('connection', (socket) => {

  console.log(`${socket.id} has joined the server}`);

  
});