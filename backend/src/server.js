const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = new express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-dxvwu.mongodb.net/omnistack8?retryWrites=true&w=majority',
{
    useNewUrlParser: true 
});
//mongoose.connect('mongodb://omnistack:omnistack@localhost:27017/omnistack8', { useNewUrlParser: true });

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);