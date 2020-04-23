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

    // db.collection('Todos').insertOne({
    //     text: 'Play ball',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todo', err)
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    //Insert new doc into Users {name, age, location}
    // db.collection('Users').insertOne({
    //         name: "Chibuzo",
    //         age: 22,
    //         location: "South Africa"
    //     }, (err, result) => {
    //         if(err){
    //             return console.log('Unable to insert todo', err)
    //         }
    //         console.log('Time is', result.ops[0]._id.getTimestamp())
    //         console.log(JSON.stringify(result.ops, undefined, 2))
    //     })

    client.close();
});