const express = require('express');
const server = express ();
const PORT = process.env.PORT || 3000;

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

//endpoints

server.use('/users',require('../router/UsersRoutes')); //Users router
server.use('/home',require('../router/HomeRoutes')); //home router
server.use('/admin', require ('../router/Adminrouter'));


//exportar app 
module.exports = {server, PORT}; 

