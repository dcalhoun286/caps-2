'use strict';

require('dotenv').config();

const faker = require('faker');

const io = require('socket.io-client');

const PORT = process.env.PORT;

const host = `http://localhost:${PORT}`;

const caps = io.connect(`${host}/caps`);

function timestamp() {
  return new Date().toDateString();
}

setInterval(() => {
  let storeName = '1-206-flowers';
  let storeId = process.env.STOREID;
  let customerName = faker.name.findName();
  let shippingAddress = `${faker.address.streetAddress('###')}, ${faker.address.city()}, ${faker.address.stateAbbr()} ${faker.address.zipCode('#####')}`;

  let payload = {
    storeName: storeName,
    storeId: storeId,
    customerName: customerName,
    shippingAddress: shippingAddress
  }

  caps.emit('pickup', payload)
}, 5000);