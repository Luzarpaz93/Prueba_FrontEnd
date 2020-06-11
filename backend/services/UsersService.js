const Users = require ('../model/Users');

module.exports = {
    create: () => Users.create(req.body), //servicio de usuario de crear uno
    find: () => Users.find(), //servicio de usuario para buscar todos
    findByCodigo: (codigo) => Users.findByCodigo(codigo), //servicio de usuario para buscar por codigo
}


        
