const { response } = require('express');
const db = require('../db/db')

const User = {
    getAllUsers: function(callback){
        const consulta = 'SELECT * FROM usuarios';
        return db.query(consulta, callback);
    },
    getUserById: function(id){
        const consulta = `SELECT * FROM Users WHERE id = ${id}`;
        return db.query(consulta, (error, result)=>{
            if(error){
                console.log("Error en la consulta");
                response.status(500).send('Error en la ')
                return
            }
            return result
        });
    },
    getUserByUserName: function(username){
        const consulta = `SELECT * FROM Users WHERE id = ${username}`;
        return db.query(consulta, (error, result)=>{
            if(error){
                console.log("Error en la consulta");
                response.status(500).send('Error en la ')
                return
            }
            return result
        });
    },
    createUser: function(){

    },
    deleteUser: function(){

    },
    updateUser: function(){

    }
}

module.exports = { User }