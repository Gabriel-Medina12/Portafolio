const http = require('http');
const path = require('path');
const fs = require('fs');

const { connectDB } = require("./db/datebase.js");
const { createNoticias, readNoticias, updateNoticias, deleteNoticias } = require('./models/noticias.js')
const { createDeportes, readDeportes, updateDeportes, deleteDeportes } = require('./models/deportes.js')

function readFiles(response, filePath, mimeType = "text/html", codigoHTTP = 200){
    fs.readFile(filePath, (error, content)=>{
        if(!error){
            response.writeHead(codigoHTTP, { 'Content-type' : mimeType})
            response.end(content);
        }else {
            const filePath = path.join(__dirname, '../Frontend/Views/http:screens/500html');
            readFiles(response, filePath, codigoHTTP = 500)
        }
    });
}

const server = http.createServer(function (request, response){
    if (request.url === '/') {
        const filePath = path.join(__dirname, '../Frontend/Views/inicio.html');
        readFiles(response, filePath, mimeType = 'text/html');
    } 
    
    else if (request.url.match(/.(html)$/) ) {
        const filePath = path.join(__dirname, `../Frontend/Views/${request.url}`);
        readFiles(response, filePath, mimeType = "text/html");
    }
    
    else if(request.url.match(/.(css)$/) ) {
        const filePath = path.join(__dirname, `../Frontend/Assets/Css/${request.url}`);
        readFiles(response, filePath, mimeType = "text/css");
    }
    else if (request.url.match(/.(js)$/) ) {
        const filePath = path.join(__dirname, `../Frontend/Assets/Js${request.url}`);
        readFiles(response, filePath, mimeType = "text/javascript");
    }
    else if (request.url.match(/\.(jpg|png|gif)$/)) {
        const filePath = path.join(__dirname, `../Frontend/Assets/img/${request.url}`);
        let mimeType = "image/jpeg";
        if (request.url.endsWith(".png")) mimeType = "image/png";
        if (request.url.endsWith(".gif")) mimeType = "image/gif";
        readFiles(response, filePath, mimeType);
    }
    
    else{
        const filePath = path.join(__dirname, '../Frontend/Views/http:screens/500html');
        readFiles(response, filePath, codigoHTTP = 404);
    }
});

connectDB().then(()=>{
    server.listen(3000, ()=>{
        // createData({
        //     'name': 'Elantris',
        //     'author': 'Brandon Sanderson'
        // })
        console.log('Servidor corriendo en: http:localhost:3000')
    }) 
});