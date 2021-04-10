'use strict';

require('dotenv').config();

const faker = require('faker');

const io = require('socket.io-client');

const PORT = process.env.PORT;

const host = `http://localhost:${PORT}`;

const caps = io.connect(`${host}/caps`);

caps.on('delivered', deliveryComplete);

function deliveryComplete(payload) {
  console.log(`VENDOR: ${payload.storeName} -- Thank you for delivering order # ${payload.orderId}`);
}

setInterval(() => {
  let storeName = '1-206-flowers';
  let storeId = process.env.STOREID;
  let orderId = faker.datatype.uuid();
  let customerName = faker.name.findName();
  let shippingAddress = `${faker.address.streetAddress('###')}, ${faker.address.city()}, ${faker.address.stateAbbr()} ${faker.address.zipCode('#####')}`;

  let payload = {
    storeName: storeName,
    storeId: storeId,
    orderId: orderId,
    customerName: customerName,
    shippingAddress: shippingAddress
  }

  // console.log(`the order id: ${payload.orderId}`);

  caps.emit('pickup', payload);
}, 5000);
