const http = require('http');
const path = require('path');
const fs = require('fs');
const { connectDB } = require("./db/datebase.js");

function readFiles(response, filePath, mimeType = "text/html", codigoHTTP = 200) {
    fs.readFile(filePath, (error, content) => {
        if (!error) {
            response.writeHead(codigoHTTP, { 'Content-type': mimeType });
            response.end(content);
        } else {
            const filePath = path.join(__dirname, '../Frontend/Views/http:screens/500.html');
            readFiles(response, filePath, "text/html", 500);
        }
    });
}

const server = http.createServer(function (request, response) {
    const url = request.url;
    const extname = path.extname(url);

    if (url === '/') {
        const filePath = path.join(__dirname, '../Frontend/Views/inicio.html');
        readFiles(response, filePath);
    } else if (extname === '.html') {
        const filePath = path.join(__dirname, `../Frontend/Views${url}`);
        readFiles(response, filePath);
    } else if (extname === '.css') {
        const filePath = path.join(__dirname, `../Frontend/Assets/Css${url}`);
        readFiles(response, filePath, "text/css");
    } else if (extname === '.js') {
        const filePath = path.join(__dirname, `../Frontend/Assets/Js${url}`);
        readFiles(response, filePath, "text/javascript");
    } else if (extname.match(/\.(jpg|png|gif)$/)) {
        const filePath = path.join(__dirname, `../Frontend/Assets/img${url}`);
        let mimeType = "image/jpeg";
        if (extname === ".png") mimeType = "image/png";
        if (extname === ".gif") mimeType = "image/gif";
        readFiles(response, filePath, mimeType);
    } else {
        const filePath = path.join(__dirname, '../Frontend/Views/http:screens/404.html');
        readFiles(response, filePath, "text/html", 404);
    }
});

connectDB().then(() => {
    server.listen(3000, () => {
        console.log('Servidor corriendo en: http://localhost:3000');
    });
});

// const http = require('http');
// const path = require('path');
// const fs = require('fs');
// const express = require('express');
// const { connectDB } = require("./db/datebase.js");
// const noticiasRoutes = require('./routes/noticiasRoutes');

// const app = express();
// app.use(express.json());

// // Rutas de noticias
// app.use('/api', noticiasRoutes);

// // Servidor estático (para servir archivos HTML, CSS, JS, etc.)
// app.use(express.static(path.join(__dirname, '../Frontend')));

// // Manejo de errores 404
// app.use((req, res) => {
//     res.status(404).sendFile(path.join(__dirname, '../Frontend/Views/http:screens/404.html'));
// });

// // Manejo de errores 500
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).sendFile(path.join(__dirname, '../Frontend/Views/http:screens/500.html'));
// });

// connectDB().then(() => {
//     const server = http.createServer(app);
//     server.listen(3000, () => {
//         console.log('Servidor corriendo en: http://localhost:3000');
//     });
// });