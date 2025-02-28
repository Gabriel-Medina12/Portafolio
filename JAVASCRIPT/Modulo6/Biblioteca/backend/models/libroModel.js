const db = require('../config/db');

class Libro {
    static async listar() {
        const [rows] = await db.query('SELECT * FROM libros');
        return rows;
    }

    static async crear(libro) {
        const [result] = await db.query('INSERT INTO libros SET ?', libro);
        return result;
    }

    static async actualizar(id, libro) {
        const [result] = await db.query('UPDATE libros SET ? WHERE id = ?', [libro, id]);
        return result;
    }

    static async eliminar(id) {
        const [result] = await db.query('DELETE FROM libros WHERE id = ?', [id]);
        return result;
    }
}

module.exports = Libro;