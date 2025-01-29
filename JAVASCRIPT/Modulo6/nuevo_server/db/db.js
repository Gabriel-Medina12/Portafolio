const myslq = require('mysql2');

const db = myslq.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'users'
});

module.exports = { db }