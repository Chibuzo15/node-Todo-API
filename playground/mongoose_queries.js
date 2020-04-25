const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user')

var id = "5ea2adfb5113702dc48392d8";

if(!ObjectID.isValid(id)){
    console.log('ID is not valid');
}
else{
    User.findById(id).then((user) => {
        console.log('User is: ', user )
    } )
    .catch((e) => {
        console.log(e)
    })
}
// Todo.find({
//     _id : id
// }).then((todos) => {
//     console.log('Todos', todos)
// });

// Todo.findOne({
//     _id : id
// }).then((todo) => {
//     console.log('Todos', todo)
// })

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         console.log('ID not found')
//     }
//     console.log('Todo by ID: ', todo)
// }).catch((e) => {
//     console.log(e)
// })