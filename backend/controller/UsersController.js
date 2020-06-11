const {UsersService} = require('../services');

module.exports = {
    create: async (req, res) => {
        try {
            const user = await UsersService.create(req.body);
            res.status(201).send(user)
        } catch (err) {
            res.status(400).send({message: 'Error creating user', err});
        }
    },
    find: async (req, res) => {
        try {
            const users = await UsersService.find();
            res.status(201).send(users)
        } catch (err) {
            res.status(400).send({message: 'Error creating user', error});  
        }
    },
    findById: async (req, res) => {
        const { id } = req.params;
        try {
            const user = await UsersService.findByCodigo(id);
            res.status(201).send(user)
        } catch (err) {
            res.status(400).send({message: 'User not found', err});  
        }
    },
    findByIdAndModificar: async (req, res) => {
        const { id } = req.params;
        const { body } = req;
        try {
            const user = await UsersService.findByCodigo(id);
            const userModificar = await UsersService.modificar(user,body)
            res.status(201).send(userModificar)
        } catch (err) {
            res.status(400).send({message: 'User not found', err});  
        }
    },
    findByIdAndDelete: async (req, res) => {
        const { id } = req.params;
        try {
            const user = await UsersService.findByCodigo(id);
            const userModificar = await UsersService.modificar(user,{is_active: false})
            res.status(201).send(userModificar)
        } catch (err) {
            res.status(400).send({message: 'Error deleting user', err});  
        }
    },
    singup: async (req, res) => {
        try {
            const user = await UsersService.create(req.body);
            res.status(201).send({message: "signin up succesfull", user});
        } catch (err) {
            res.status(400).send({message: 'Error creating user', err});
        }
    },
    login: async (req, res) => {
        const {email, password} = req.body; 
        try {
            const user = await UsersService.findByEmail(email);
            if (!user) res.status(404).send ({ message: 'User not found'});
            const isMatch = await user.comparePassword(password, user.password);
            if (!isMatch) res.status(400).send({message:'Invalid credentials'});
            res.status(200).send({message: "go ahead"}); 
        } catch (err) {
            res.status(400).send({message :'Error on log in', err})
        }
        }
    }

