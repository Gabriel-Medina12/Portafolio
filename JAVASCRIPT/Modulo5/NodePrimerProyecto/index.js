const http = require('http');
const path = require('path');
const fs = require('fs')

function readFiles(response, filePath, mimeType = "text/html", codigoHTTP = 200){
    fs.readFile(filePath, (error, content)=>{
        if(!error){
            response.writeHead(codigoHTTP, { 'Content-type' : mimeType})
            response.end(content);
        }else {
            const filePath = path.join(__dirname, '/views/http-screens/500.html');
            readFiles(response, filePath, codigoHTTP = 500)
        }
    });
}

const server = http.createServer(function (request, response){
    if (request.url === "/") {
        const filePath = path.join(__dirname, '/views/home.html');
        readFiles(response, filePath);
    }
    else if(request.url === '/login'){
        const filePath = path.join(__dirname, '/views/login.html');
        readFiles(response, filePath);
    }
    else if(request.url === '/registro'){
        const filePath = path.join(__dirname, '/views/register.html');
        readFiles(response, filePath);
    }
    else if(request.url === '/style'){
        const filePath = path.join(__dirname, '/views/assets/css/styles.css');
        readFiles(response, filePath, mimeType = "text/css");
    }
    else if (request.url === '/javascript'){
        const filePath = path.join(__dirname, '/views/assets/js/app.js');
        readFiles(response, filePath, mimeType = "text/javascript");
    }
    else{
        const filePath = path.join(__dirname, '/views/http-screens/404.html');
        readFiles(response, filePath, codigoHTTP = 404);
    }
});

server.listen(3000, ()=>{
    console.log('Servidor corriendo en: http:localhost:3000')
}) 