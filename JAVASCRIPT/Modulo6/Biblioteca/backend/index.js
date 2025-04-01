const express = require('express');
const path = require('path');
const libroRoutes = require('./routes/libroRoutes');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname, '../frontend')));
app.use(express.static(path.join(__dirname, 'public')))


app.use('/api/libros', libroRoutes);


app.get('/libros', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});



const port = 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});