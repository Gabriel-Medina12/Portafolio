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
    }
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

// const { ObjectId } = require('mongodb');
// const { getDb } = require('../db/datebase.js');

// const createNoticias = async (datos) => {
//     try {
//         const db = getDb();
//         const collection = db.collection('Noticias');
//         const result = await collection.insertOne(datos);
//         return result.insertedId;
//     } catch (error) {
//         console.error('Error al crear noticia:', error);
//         throw error;
//     }
// };

// const readNoticias = async () => {
//     try {
//         const db = getDb();
//         const collection = db.collection('Noticias');
//         return await collection.find({}).toArray();
//     } catch (error) {
//         console.error('Error al leer noticias:', error);
//         throw error;
//     }
// };

// const updateNoticias = async (id, datos) => {
//     try {
//         const db = getDb();
//         const collection = db.collection('Noticias');
//         const result = await collection.updateOne(
//             { _id: new ObjectId(id) },
//             { $set: datos }
//         );
//         return result;
//     } catch (error) {
//         console.error('Error al actualizar noticia:', error);
//         throw error;
//     }
// };

// const deleteNoticias = async (id) => {
//     try {
//         const db = getDb();
//         const collection = db.collection('Noticias');
//         const result = await collection.deleteOne({ _id: new ObjectId(id) });
//         return result.deletedCount;
//     } catch (error) {
//         console.error('Error al eliminar noticia:', error);
//         throw error;
//     }
// };

// module.exports = { createNoticias, readNoticias, updateNoticias, deleteNoticias };