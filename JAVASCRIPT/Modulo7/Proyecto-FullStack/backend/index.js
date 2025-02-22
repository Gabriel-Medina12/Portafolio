const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const dbConfig = require('./config/config.json').development;
require('dotenv').config()

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors({
    origin: process.env.ORIGIN,
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: ['Content-Type'],
    credentials: true
}));
const sequelize = new Sequelize(dbConfig.database, 
    dbConfig.username, 
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect: dbConfig.dialect
    }
);

const User = require('./models/user')(sequelize, DataTypes)

sequelize.sync().then(()=>{
    console.log('Tablas creadas');
})

const userRoutes = require('./controllers/user');
app.use('/api/users', userRoutes)

app.listen(port, ()=>{
    console.log(`Corriendo: http://localhost${port}`)
})