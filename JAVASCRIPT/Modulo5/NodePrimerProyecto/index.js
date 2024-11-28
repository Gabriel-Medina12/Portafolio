const http = require('http');
const path = require('path')
const fs = require('fs')

function readFiles(response, filePath, mimeType = "text/html", codigoHTTP = 200){

}

const server = http.createServer(function (request, response){
    if (request.url === "/") {

        const filePath = path.join(__dirname, '/views/home.html');
        fs.readFile(filePath, (error, content)=>{
            if(!error){
                response.writeHead(200),{'Content-type': mimeType}
                response.end(content)
            }else{
                response.writeHead(500);
                response.end("Error en el servidor")
            }
        });

    }
     else if (request.url === "/login") {
        const filePath = path.join(__dirname, '/views/login.html');

        fs.readFile(filePath, (error, content)=>{
            if(!error){
                response.writeHead(200),{'Content-type': 'text/html'}
                response.end(content)
            }else{
                response.writeHead(500);
                response.end("Error en el servidor")
            }
        });
    }
    else if(request.url === '/style'){
        const filePath = path.join(__dirname, '/views/assets/css/styles.css');

        fs.readFile(filePath, (error, content)=>{

        }
    }
    else if (request.url === "/registro") {
        const filePath = path.join(__dirname, '/views/register.html');

        fs.readFile(filePath, (error, content)=>{
            if(!error){
                response.writeHead(200),{'Content-type': 'text/html'}
                response.end(content)
            }
        });
    }
})

server.listen(3000, ()=>{
    console.log('Servidor corriendo en: http:localhost:3000')
}) 