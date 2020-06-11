const express = require('express');
const router = express.Router();


const Users = require ('../model/Users');

const { UsersController } = require('../controller');
//sign in
router.post('/signup', UsersController.singup);

//log in
router.post('/login', UsersController.login);

module.exports = router;