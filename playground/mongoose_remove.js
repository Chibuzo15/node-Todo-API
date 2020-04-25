const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user')

// Todo.remove({}).then((result) => {
//     console.log(result)
// });

// Todo.findOneAndRemove
Todo.findOneAndRemove({
    _id : '5ea49d96a710cf7393cef572'
}).then((todo) => console.log(todo))

Todo.findByIdAndRemove('5ea49d96a710cf7393cef572').then((todo) => {
    console.log(todo);
})