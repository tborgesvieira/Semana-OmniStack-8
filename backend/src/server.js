const express = require('express');
const routes = require('./routes');

const server = new express();

server.use(express.json());

server.use(routes);

server.listen(3333);