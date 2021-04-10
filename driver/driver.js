'use strict';

require('dotenv').config();

const io = require('socket.io-client');

const PORT = process.env.PORT;

const host = `http://localhost:${PORT}`;

const caps = io.connect(`${host}/caps`);

caps.on('pickup', orderPickedUp);

function orderPickedUp(payload) {
  setTimeout(() => {
    console.log(`picking up ${payload.orderId}`)
  }, 1500);
}