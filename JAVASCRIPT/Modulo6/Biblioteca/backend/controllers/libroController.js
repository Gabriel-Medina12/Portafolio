const Libro = require('../models/libroModel');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/img')); // Ruta correcta
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); // Nombre único para el archivo
    }
});
// const storage2 = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, path.join(__dirname, '../public/books')); // Ruta correcta
//     },
//     filename: (req, file, cb) => {
//         cb(null, `${Date.now()}-${file.originalname}`); // Nombre único para el archivo
//     }
// });
const upload = multer({ storage });
// const upload2 = multer({ storage2 });

exports.listarLibros = async (req, res) => {
    try {
        const libros = await Libro.listar();
        res.json(libros);
    } catch (error) {
        res.status(500).json({ error: 'Error al listar los libros' });
    }
};

exports.crearLibro = [
    upload.single('portada'), 
    async (req, res) => {
        const { titulo, autor, fecha_publicacion, genero } = req.body;
        const portada = req.file ? `/img/${req.file.filename}` : req.body.portadaExistente; 

        try {
            await Libro.crear({ titulo, autor, fecha_publicacion, genero, portada });
            res.status(201).json({ message: 'Libro creado exitosamente' });
        } catch (error) {
            console.error('Error al crear el libro:', error);
            res.status(500).json({ Error: 'Error al crear el libro'});
        }
    }
];

exports.obtenerLibro = async (req, res) => {
    const { id } = req.params;
    try {
      const libro = await Libro.obtener(id);
      if (!libro) {
        return res.status(404).json({ error: 'Libro no encontrado' });
      }
      res.json(libro);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el libro' });
    }
  };

exports.actualizarLibro = [
    upload.single('portada'), 
    async (req, res) => {
        const { id } = req.params;
        const { titulo, autor, fecha_publicacion, genero } = req.body;
        const portada = req.file ? `/img/${req.file.filename}` : req.body.portadaExistente; 

        try {
            await Libro.actualizar(id, { titulo, autor, fecha_publicacion, genero, portada });
            res.json({ mensaje: 'Libro actualizado correctamente' });
        } catch (error) {
            console.error('Error al actualizar el libro:', error);
            res.status(500).json({ Error: 'Error al actualizar el libro'});
        }
    }
];

exports.eliminarLibro = async (req, res) => {
    const { id } = req.params;
    try {
        await Libro.eliminar(id);
        res.json({ mensaje: 'Libro eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el libro' });
    }
};