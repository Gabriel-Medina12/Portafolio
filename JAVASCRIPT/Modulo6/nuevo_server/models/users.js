const { db } = require('../db/db');

const usuarios = {
    getAllUsers: function(callback){
        const consulta = 'SELECT * FROM usuarios';
        return db.query(consulta, callback)
    },
    getUserById: function(id, callback){
        const consulta = `SELECT * FROM usuarios WHERE id = ${id}`;
        return db.query(consulta, callback)
    },
    getUserByName: function(nombre, callback){
        const consulta = `SELECT * FROM usuarios WHERE nombre = ${nombre}`;
        db.query(consulta = [nombre], callback)
    },
    createUser: function(usuario, callback){
        const consulta = `INSERT INTO usuarios (nombre, apellido, email, direccion) VALUES (${usuario.nombre}, ${usuario.apellido}, ${usuario.email}, ${usuario.direccion} )`
        return db.query(consulta, callback)
    },  
    updateUser: function(usuario, callback){
        const consulta = `UPDATE usuarios SET nombre = '${usuario.nombre}', apellido = '${usuario.apellido}', email = '${usuario.email}' WHERE id = ${usuario.id}`
        return db.query(consulta, callback);
    },
    deleteUser: function(id, callback){
        const consulta = `DELETE FROM usuarios WHERE id = ${id}`
        return db.query(consulta, callback)
    }
}

module.exports = { usuarios }