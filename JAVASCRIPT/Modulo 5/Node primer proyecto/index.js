const http = require('http');

const server = http.createServer(function (request, response){
    if (request.url === "/") {
        response.writeHead(200),{'Content-type': 'text/html'}
        response.end(`
            <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Home</title>
                        <style>
                            h1{
                                text-align: center;
                            }
                            img{
                                display: flex;
                                align-items: center;
                                justify-content: center;
                            }
                        </style>
                    </head>
                    <body>
                        <h1>Esta es la pagina principal del Sr Pepe</h1>
                        <img src="https://th.bing.com/th/id/OIP.vW_FtLsGC80uNUr_i8irRwHaFA?w=269&h=182&c=7&r=0&o=5&pid=1.7">
                    </body>
                </html>
            `)
    } else if (request.url === "/pepe") {
    console.log('esta es la pagina principal')
}
})

server.listen(3000, ()=>{
    console.log('Servidor corriendo en: http:localhost:3000')
}) 