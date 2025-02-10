const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb+srv://saulymarclash12:DataBase12@cluster0.kinkr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

async function connectDB() {
    try{
        await client.connect()
        console.log('Conectado a Mongo DB')
    }catch (error){
        console.log(error);
    }
}


module.exports = { connectDB, client }

// const { MongoClient } = require('mongodb');

// const uri = 'mongodb+srv://saulymarclash12:DataBase12@cluster0.kinkr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// let database;

// async function connectDB() {
//     try {
//         await client.connect();
//         database = client.db('DeportesDelMundo');
//         console.log('Conectado a MongoDB');
//     } catch (error) {
//         console.error('Error al conectar a MongoDB:', error);
//     }
// }

// function getDb() {
//     if (!database) {
//         throw new Error('No se ha establecido la conexión a la base de datos');
//     }
//     return database;
// }

// module.exports = { connectDB, getDb };