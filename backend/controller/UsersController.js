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
            res.status(400).send({message: 'Error creating user', err});  
        }
    },
    findByCodigo: async (req, res) => {
        const { codigo } = req.params;
        try {
            const user = await UsersService.findByCodigo(codigo);
            res.status(201).send(user)
        } catch (err) {
            res.status(400).send({message: 'User not found', err});  
        }
    },
}


