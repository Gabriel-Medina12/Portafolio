const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'MandyORG/2005',
    database: 'registor_students',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = db;