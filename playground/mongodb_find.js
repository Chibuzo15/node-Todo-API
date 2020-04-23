// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const assert = require('assert');
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'TodoApp';
 
// Use connect method to connect to the server
MongoClient.connect(url, (err, client) => {
    if (err){
        return console.log('Unable to connect to mongodb server');
    }
    // assert.equal(null, err);
    console.log('Connected to Mongodb server');

    const db = client.db(dbName)
    // db.collection('Todos').find({
    //     _id: new ObjectID('5ea1b0e798f6fc178cc89c83')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log('Unable to fetch todos', err)
    // })

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count : ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err)
    // })

    db.collection('Users').find({
        name: "Chibuzo"
    }).count().then((count) => {
        console.log(`Todos count : ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err)
    })


    // client.close();
});