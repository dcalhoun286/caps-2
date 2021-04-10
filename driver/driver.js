'use strict';

require('dotenv').config();

const io = require('socket.io-client');

const PORT = process.env.PORT;

const host = `http://localhost:${PORT}`;

const caps = io.connect(`${host}/caps`);

caps.on('pickup', orderPickedUp);
caps.on('abcde', payload => {
  console.log(payload);
});

function orderPickedUp(payload) {
  setTimeout(() => {

    console.log(`picking up ${payload.orderId}`);

    caps.emit('in-transit', payload);

  }, 1500);

  setTimeout(() => {

    console.log(`delivery complete for order # ${payload.orderId}`);

    caps.emit('delivered', payload);

  }, 3000);

}
