require('./config/config');

const _ = require('lodash')
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

var port = process.env.PORT;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text : req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e)
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});


//GET /todos/2324234
app.get('/todos/:id', (req, res) => {
    var id = req.params.id
    if(!ObjectID.isValid(id)){
        // res.send({
        //     err: "Todo ID is not valid"
        // })
        console.log('Todo ID is not valid')
        res.status(404).send()
    }else{
        Todo.findById(id).then((todo) => {
            if(!todo){
                console.log('Todo not found')
                return res.status(404).send()
            }
            
                console.log('Successful')
                res.send({todo})
            
        }, (e) => {
            res.status(400).send(e)
        })
    }
})

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id
    if(!ObjectID.isValid(id)){
        console.log('ID not valid')
        return res.status(404).send();
    }
    Todo.findByIdAndRemove(id).then((todo) => {
        if(!todo){
            // console.log('ID doesnt exist in the database')
            return res.status(404).send();
        }
        // console.log('Successfully deleted Todo');
        res.send({todo})
    }).catch((e) => {
        console.log(e)
        return res.status(400).send();
    })
})

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if(!ObjectID.isValid){
        return res.status(400).send();
    }

    if (_.isBoolean(body.completed) && body.completed){
        body.completedAt = new Date().getTime();
    }else{
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if (!todo){
            return res.status(404).send();
        }

        res.send({todo});
    }).catch((e) => {
        res.status(400).send()
    })
})
 
app.listen(port, () => {
    console.log(`Server started up at port ${port}`)
});

module.exports = {app}