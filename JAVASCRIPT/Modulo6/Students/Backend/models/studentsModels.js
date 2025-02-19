const db = require('../db/database');

class Student {
    static async getAll() {
        const [rows] = await db.query('SELECT * FROM students');
        return rows;
    }

    static async getById(id) {
        const [rows] = await db.query('SELECT * FROM students WHERE id = ?', [id]);
        return rows[0];
    }

    static async create(student) {
        const { nombre, apellido, fecha_nacimiento, grado } = student;
        const [results] = await db.query(
            'INSERT INTO students (nombre, apellido, fecha_nacimiento, grado) VALUES (?, ?, ?, ?)',
            [nombre, apellido, fecha_nacimiento, grado]
        );
        return results.insertId;
    }

    static async update(id, student) {
        const { nombre, apellido, fecha_nacimiento, grado } = student;
        await db.query(
            'UPDATE students SET nombre = ?, apellido = ?, fecha_nacimiento = ?, grado = ? WHERE id = ?',
            [nombre, apellido, fecha_nacimiento, grado, id]
        );
    }

    static async delete(id) {
        await db.query('DELETE FROM students WHERE id = ?', [id]);
    }
}

module.exports = Student;