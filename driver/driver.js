'use strict';

require('dotenv').config();

const io = require('socket.io-client');

const PORT = process.env.PORT;

const host = `http://localhost:${PORT}`;

const socket = io.connect(`${host}/deliveries`);