const { createNoticias, readNoticias, updateNoticias, deleteNoticias } = require('../models/noticias');

const createNoticias = async (req, res) => {
    try {
        const { titulo, contenido, autor } = req.body;
        const nuevaNoticia = { titulo, contenido, autor, fecha: new Date() };
        const id = await createNoticias(nuevaNoticia);
        res.status(201).json({ id });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la noticia' });
    }
};

const readNoticias = async (req, res) => {
    try {
        const noticias = await readNoticias();
        res.status(200).json(noticias);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las noticias' });
    }
};

const updateNoticias = async (req, res) => {
    try {
        const { id } = req.params;
        const { titulo, contenido, autor } = req.body;
        const datosActualizados = { titulo, contenido, autor };
        await updateNoticias(id, datosActualizados);
        res.status(200).json({ message: 'Noticia actualizada correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la noticia' });
    }
};

const deleteNoticias = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteNoticias(id);
        if (result === 0) {
            return res.status(404).json({ error: 'Noticia no encontrada' });
        }
        res.status(200).json({ message: 'Noticia eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la noticia' });
    }
};
router.post('/noticias', crearNoticia);
router.get('/noticias', obtenerNoticias);
router.put('/noticias/:id', actualizarNoticia);
router.delete('/noticias/:id', eliminarNoticia);

module.exports = router;

module.exports = { createNoticias, readNoticias, updateNoticias, deleteNoticias };