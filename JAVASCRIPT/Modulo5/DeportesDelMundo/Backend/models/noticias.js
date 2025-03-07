const { ObjectId } = require('mongodb');
const { client } = require('../db/datebase.js');
const { connect } = require('http');

const createNoticias = async (datos) =>{
    try{
        await client.connect();
        const database = client.db('DeportesDelMundo');
        const collection = database.collection('Noticias');
        const result = await collection.insertOne(datos);
        return result.insertedId;
    }catch(error){
        console.log(error);
    } finally{
        await client.close();
    }
    console.log('Insertando noticia en la base de datos...');
}
const readNoticias = async () =>{
    try{
        await client.connect();
        const database = client.db('DeportesDelMundo');
        const collection = database.collection('Noticias');
        
        return await collection.find({}).toArray();

    }catch(error){
        console.log(error);
    }
}
const updateNoticias = async (id, datos) =>{
    try{
        await client.connect();
        const database = client.db('DeportesDelMundo');
        const collection = database.collection('Noticias');
        
        const result = await collection.updateOne({
            _id: new ObjectId(id)
        }, {
            $set: datos
        });
        return await collection.find({}).toArray();

    }catch(error){
        console.log(error);
    }
}
const deleteNoticias = async (id) =>{
    try{
        await client.connect();
        const database = client.db('DeportesDelMundo');
        const collection = database.collection('Noticias');
        const result = await collection.deleteOne({
            _id: new ObjectId(id)
        });
        return result.deleteCount

    }catch(error){
        console.log(error);
    }
}

module.exports = { createNoticias, readNoticias, updateNoticias, deleteNoticias}