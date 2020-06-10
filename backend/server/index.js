const express = require('express');
const server = express ();
const PORT = process.env.PORT || 3000;

server.use(express.urlencoded({extended: true}));
server.use(express.json());

//endpoints
server.get('/', (req, res) => res.status(201).send('Hello World')) //todo bien

server.use(require('../router'));
//exportar app 
module.exports = {server, PORT}; 

