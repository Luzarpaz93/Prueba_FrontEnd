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
            res.status(400).send({message: 'User not found', err});  
        }
    },
}

