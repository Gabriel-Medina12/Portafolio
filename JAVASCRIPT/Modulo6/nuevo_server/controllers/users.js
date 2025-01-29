const express = require('express');
const router = express.Router();
const { usuarios } = require('../models/users');

router.get('/', (request, response)=>{
    usuarios.getAllUsers((error, result)=>{
        if (error){
            console.log('error en la consulta')
            response.status(500).send('Error en la consulta')
            return;
        }
        response.render('usuarios', {usuarios: result})
    })
});

router.get('/:id', (request, response)=>{
    usuarios.getUserById(request.params.id, (error, result)=>{
        if(error){
            console.log('error al ejecutar la consulta');
            return response.status(500).send('error al ejercutar la consulta')
        }
        if(!result){
            console.log('No se encontró el usuario con ID:', request.params.id);
            return response.status(404).send('Usuario no encontrado')
        }
        response.render('usuarios', { usuarios: result})
    })
})

module.exports = router