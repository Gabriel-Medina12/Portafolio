const { ObjectId } = require('mongodb');
const { client } = require('../db/datebase.js');
const { connect } = require('http');

const createDeportes = async (datos) =>{
    try{
        await client.connect();
        const dataBase = client.db('DeportesDelMundo');
        const collection = dataBase.collection('Deportes');
        const result = await collection.insertOne(datos);

        return result.insertedId;
    }catch(error){
        console.log(error);
    }
}
const readDeportes = async () =>{
    try{
        await client.connect();
        const dataBase = client.db('DeportesDelMundo');
        const collection = dataBase.collection('Deportes');
        
        return await collection.find({}).toArray();

    }catch(error){
        console.log(error);
    }
}
const updateDeportes = async (id, datos) =>{
    try{
        await client.connect();
        const dataBase = client.db('DeportesDelMundo');
        const collection = dataBase.collection('Deportes');
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
const deleteDeportes = async (id) =>{
    try{
        await client.connect();
        const dataBase = client.db('DeportesDelMundo');
        const collection = dataBase.collection('Deportes');
        const result = await collection.deleteOne({
            _id: new ObjectId(id)
        });
        return result.deleteCount

    }catch(error){
        console.log(error);
    }
}

module.exports = { createDeportes, readDeportes, updateDeportes, deleteDeportes}