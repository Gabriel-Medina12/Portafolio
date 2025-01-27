const express = require('express');
const { db }= require('db/db')
const app = express();
const path = require('path')
const port = 3000

const userController = require('./controllers/users')

app.use(
    express.static(
        path.join(__dirname, 'public')
    )
)
app.set('view engine', 'ejs');

app.get('/', (request, response)=>{
    response.send('Feliz año nuevo');
})

// app.get('/data',(request, response)=>{
//     const consulta = 'SELECT * FROM usuarios';
//     db.query(consulta, (error, result)=>{
//         if (error){
//             console.log('Error en la consulta');
//             response.status(500).send('Error en la consulta')
//             return;
//         }
//         response.json(result);
//     })
// })

app.use('/user', userController);

db.connect((error)=>{
    if(error){
        console.log('error en la base de datos')
        return
    }
    console.log('Conexión exitosa a la base de datos');
});

app.listen(port, ()=>{
    console.log('Servidor corriendo en: http://localhost'+ port)
})