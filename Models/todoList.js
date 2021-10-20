const mongoose = require('mongoose');

const todoListModel = new mongoose.Schema({
    nomeTarefa: {type: String, required: true},
    prioridade: {type: String, required: true},
    data: {type: Date},
    etiqueta: {type: String, required: true},
    status:{type: String, required: true}
});

const TodoList = mongoose.model('todoList', todoListModel);

module.exports = TodoList; 