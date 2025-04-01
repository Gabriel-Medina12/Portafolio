const express = require('express');
const router = express.Router();
const libroController = require('../controllers/libroController');

// Rutas para libros
router.get('/', libroController.listarLibros);
router.post('/', libroController.crearLibro);
router.get('/:id', libroController.obtenerLibro);

router.put('/:id', libroController.actualizarLibro);
router.delete('/:id', libroController.eliminarLibro);

module.exports = router;