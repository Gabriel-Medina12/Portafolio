const express = require('express');

const mysql = ('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Medina12',
    database: 'users'
});