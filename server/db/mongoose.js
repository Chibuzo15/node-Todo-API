var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://heroku_qq786tmc:rudig2gcbe6ru8hbtmau2vb99k@ds057244.mlab.com:57244/heroku_qq786tmc' || 'mongodb://localhost:27017/TodoApp')

module.exports = {
    mongoose
}