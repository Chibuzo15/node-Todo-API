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
    
    // db.collection('Todos').findOneAndUpdate({
    //     _id : new ObjectID("5ea28bb400239fa626b1108c")
    // },{
    //     $set: {
    //         completed: true
    //     }
    // },{
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result)
    // })

    db.collection('Users').findOneAndUpdate({
        name: 'Mike'
    },{
        $set: {
            name: 'Chibuzo'
        },
        $inc: {
            age: 10
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    })

    // client.close();
});