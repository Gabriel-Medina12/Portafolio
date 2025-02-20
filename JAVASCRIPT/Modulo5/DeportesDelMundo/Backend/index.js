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