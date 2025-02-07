const express = require('express');
const { db } = require('./db/db');
const app = express();
const path = require('path')
const port = 3000;
const bodyParser = require('body-parser')


const usuarioController = require('./controllers/users');

app.use(express.static(path.join(__dirname, 'assets')))
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


app.get('/', (request, response)=>{
    response.send('Feliz año nuevo')
})

// app.get('/data', (request, response)=>{
//     const consulta = 'SELECT * FROM usuarios';
//     db.query(consulta, (error, result)=>{
//         if (error){
//             console.log('error en la consulta')
//             response.status(500).send('Error en la consulta')
//             return;
//         }
//         response.json(result);
//     })
// })

app.use('/usuarios', usuarioController);

db.connect((error)=>{
    if(error){
        console.log('Error en la base de datos')
        return
    }
    console.log('Conexión exitosa a la base de datos')
    app.listen(3000, ()=>{
        console.log('Servidor corriendo en: http://localhost:'+ port)
    })
})

