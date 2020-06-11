const express = require('express');
const router = express.Router();


const Users = require ('../model/Users');

const { UsersController } = require('../controller');




//crear
router.post('/crear', UsersController.create);

//get all
router.get('/lista', UsersController.find);

//get one
router.get('/editar/:id', UsersController.findById);

//modificar
router.patch('/editar/:id', UsersController.findByIdAndModificar);

//borrado lógico
router.delete('/editar/:id', UsersController.findByIdAndDelete);





module.exports = router;
