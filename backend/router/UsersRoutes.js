const express = require('express');
const router = express.Router();


const Users = require ('../model/Users');

const { UsersController } = require('../controller');




//crear
router.post('/crear', UsersController.create);

//get all
router.get('/lista', UsersController.find);

//get one
router.get('/users/:codigo', UsersController.findByCodigo);


module.exports = router;
