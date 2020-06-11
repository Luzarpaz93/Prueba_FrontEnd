const Users = require ('../model/Users');

module.exports = {
    create: () => Users.create(req.body), //servicio de usuario de crear uno
    find: () => Users.find(), //servicio de usuario para buscar todos
    findByCodigo: (id) => Users.findByCodigo(id), //servicio de usuario para buscar por codigo
    modificar: (user, body ) => {  //encontrar por codigo y modificar usuario
        Object.assign(user, body); 
        return user.save();
}
}


        
