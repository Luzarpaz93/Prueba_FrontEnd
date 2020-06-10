const express = require('express');
const server = express ();
const PORT = process.env.PORT || 3000;


//endpoints
server.get('/', (req, res) => res.status(201).send('Hello World')) //todo bien


//exportar app 
module.exports = {server, PORT}; 

