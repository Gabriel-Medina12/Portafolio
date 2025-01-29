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
    createUser: function(){

    },
    deleteUser: function(){

    },
    updateUser: function(){

    }
}

module.exports = { usuarios }