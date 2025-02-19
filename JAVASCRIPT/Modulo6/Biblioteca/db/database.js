const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'MandyORG/2005',
    database: 'biblioteca_libros',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = db;