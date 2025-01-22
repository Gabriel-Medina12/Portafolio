const express = require('express');

const mysql = ('mysql2');

const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Medina12',
    database: 'socialNetwork'
});


db.connect((error)=>{
    if(error){
        console.log('error en la base de datos')
        return
    }
    console.log('Conexión exitosa a la base de datos');
});

app.get('/', (request, response)=>{
    response.send('Feliz año nuevo');
})

app.get('/data',(request, response)=>{
    const consulta = 'SELECT * FROM usuarios';
    db.query(consulta, (error, result)=>{
        if (error){
            console.log('Error en la consulta');
            response.status(500).send('Error en la consulta')
            return;
        }
        response.json(result);
    })
})

app.listen(port, ()=>{
    console.log('Servidor corriendo en: http://localhost'+ port)
})