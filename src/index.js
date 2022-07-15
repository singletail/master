const { port, env } = require('./config/vars');
const logger = require('./config/logger');
const http = require('http');
const app = require('./config/express');
const mongoose = require('./config/mongoose');
const { socketReceive, sGreet } = require('./sockets');

const { WebSocketServer } = require('ws');

mongoose.connect();

const server = http.createServer(app);
const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
  ws.on('open', function open() {
    sGreet(ws);
  });
  ws.on('message', (data) => {
    socketReceive(ws, data);
  });
});

server.listen(port, () =>
  console.log(`server started on port ${port} (${env})`)
);

module.exports = { server, wss };
