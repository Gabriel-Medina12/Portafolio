const express = require('express');
const db = require('./Db/database.js');
const tasksRouter = require('./Router/tasks.js');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/tasks', tasksRouter);

app.listen(PORT, () =>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
});