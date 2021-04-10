'use strict';

require('dotenv').config();

const io = require('socket.io-client');

const PORT = process.env.PORT;

const host = `http://localhost:${PORT}`;

const caps = io.connect(`${host}/caps`);

caps.on('pickup', orderPickedUp);
// caps.on('in-transit', orderDelivered);

function orderPickedUp(payload) {
  setTimeout(() => {

    console.log(`picking up ${payload.orderId}`);

    caps.emit('in-transit', payload);

  }, 1500);

}

// function orderDelivered(payload) {

//   setTimeout(() => {

//     console.log(`delivery for order # ${payload.orderId} complete`);

//     // caps.emit('delivered', payload);

//   }, 3000);

// }