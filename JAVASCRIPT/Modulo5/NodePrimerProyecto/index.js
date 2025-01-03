const http = require('http');
const path = require('path');
const fs = require('fs');

const { connectDB } = require('./db/db.js')
const { createData, readData, updateData, deleteData } = require('./models/libros.js')

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
    if (request.url === '/') {
        const filePath = path.join(__dirname, '/views/home.html');
        readFiles(response, filePath, mimeType = 'text/html');
    } 
    
    else if (request.url.match(/.(html)$/) ) {
        const filePath = path.join(__dirname, `/views/${request.url}`);
        readFiles(response, filePath, mimeType = "text/html");
    }
    
    else if(request.url.match(/.(css)$/) ) {
        const filePath = path.join(__dirname, `/views/assets/css/${request.url}`);
        readFiles(response, filePath, mimeType = "text/css");
    }
    else if (request.url.match(/.(js)$/) ) {
        const filePath = path.join(__dirname, `/views/assets/js/${request.url}`);
        readFiles(response, filePath, mimeType = "text/javascript");
    }
    else if (request.url.match(/\.(jpg|png|gif)$/)) {
    const filePath = path.join(__dirname, `/views/assets/images/${request.url}`);
    let mimeType = "image/jpeg";
    if (request.url.endsWith(".png")) mimeType = "image/png";
    if (request.url.endsWith(".gif")) mimeType = "image/gif";
    readFiles(response, filePath, mimeType);
}
    else if (request.url === '/api/libros'){
        readData().then(libros =>{
            console.log(libros);
            response.writeHead(200,{"Content-Type": 'application/json'})
            response.end(JSON.stringify(libros));
        })
    }
    else{
        const filePath = path.join(__dirname, '/views/http-screens/404.html');
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
