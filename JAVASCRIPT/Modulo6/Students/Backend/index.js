const express = require('express');

const studentsRoutes = require('./routes/studentsRoutes');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', studentsRoutes);
app.use(express.static('../public'));



app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});