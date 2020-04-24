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
    
    //deleteMany
    // db.collection('Todos').deleteMany({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // });


    //deleteOne
    // db.collection('Todos').deleteOne({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result)
    // })


    //findOneandDelete
    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) => {
    //     console.log(result)
    // });

    //Test
    
    // db.collection('Users').deleteMany({
    //     name: 'Chibuzo'
    // }).then((result) => {
    //     console.log(result)
    // })

    //2nd Test
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5ea1b49b3405ea1b183194dc')
    }).then((result) => {
        console.log(result)
    })

    // client.close();
});