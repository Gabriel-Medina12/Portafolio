const { ObjectId } = require('mongodb');
const { client } = require('../db/db.js');
const { connect } = require('http');

const createData = async (datos) =>{
    try{
        await client.connect();
        const dataBase = client.db('Library');
        const collection = dataBase.collection('Books');
        const result = await collection.insertOne(datos);

        return result.insertedId;
    }catch(error){
        console.log(error);
    }
}
const readData = async () =>{
    try{
        await client.connect();
        const dataBase = client.db('Library');
        const collection = dataBase.collection('Books');
        
        return await collection.find({}).toArray();

    }catch(error){
        console.log(error);
    }
}
const updateData = async (id, datos) =>{
    try{
        await client.connect();
        const dataBase = client.db('Library');
        const collection = dataBase.collection('Books');
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
const deleteData = async (id) =>{
    try{
        await client.connect();
        const dataBase = client.db('Library');
        const collection = dataBase.collection('Books');
        const result = await collection.deleteOne({
            _id: new ObjectId(id)
        });
        return result.deleteCount

    }catch(error){
        console.log(error);
    }
}

module.exports = { createData, readData, updateData, deleteData}