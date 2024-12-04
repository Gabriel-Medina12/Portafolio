const{ MongoClient } = require('mongodb')

const client = new MongoClient('mongodb+srv://saulymarclash12:0uCgkex2ia84nl3X@cluster0.kinkr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

async function connectDB() {
    try{
        await client.connectDB()
        console.log('Conectado a Mongo DB')
    }catch (error){
        console.log(error);
    }
}


module.exports = { connectDB, client }