const Users = require ('../model/Users');
const bcrypt = require ('bcrypt');

module.exports = {
    create: (body) => {
        const newUSer = new Users (body);
        return newUSer.save()
    }, //servicio de usuario de crear uno
    find: () => Users.find({is_active: true}), //servicio de usuario para buscar todos
    findByCodigo: (id) => Users.findByCodigo(id), //servicio de usuario para buscar por codigo
    findByEmail: (email) => Users.findOne({email : email}),
    modificar: (user, body ) => {  //encontrar por codigo y modificar usuario
        Object.assign(user, body); 
        return user.save();
    },
    comparePasswords: (candidatePassword, password) => {
        return bcrypt.compareSync(candidatePassword, password);
}
}
