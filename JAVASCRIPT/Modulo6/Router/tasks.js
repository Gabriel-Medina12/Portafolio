const express = require('express');
const db = require('../Db/database');

const router = express.Router();

router.get('/', (req, res)=>{
    const sql = 'SELECT * FROM tasks';
    db.all(sql,[],(error, rows)=>{
        if(error){
            res.status(500).json({ error: error.message });
            return;
        }
        res.json(rows);
    });
});

router.post('/', (req, res) => {
    const { title, description, due_date, status } = req.body;

    // Verifica que el título no esté vacío
    if (!title) {
        return res.status(400).json({ error: 'El título es obligatorio' });
    }

    const sql = 'INSERT INTO tasks (title, description, due_date, status) VALUES (?, ?, ?, ?)';
    db.run(sql, [title, description, due_date, status], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ id: this.lastID }); // Devuelve el ID de la tarea creada
    });
});

router.put('/:id', (req, res) => {
    const { title, description, due_date, status } = req.body;
    const sql = 'UPDATE tasks SET title = ?, description = ?, due_date = ?, status = ? WHERE id = ?';
    db.run(sql, [title, description, due_date, status, req.params.id], function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ changes: this.changes });
    });
});

router.delete('/:id', (req, res) => {
    const sql = 'DELETE FROM tasks WHERE id = ?';
    db.run(sql, [req.params.id], function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ changes: this.changes });
    });
});

module.exports = router;