'use strict';

const io = require('socket.io-client');

const host = 'http://localhost:3333';

const socket = io.connect(host);