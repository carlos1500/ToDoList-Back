const Todo = require('../Models/todoList');

class TodoService {
    findAll = async () => {
        return await Todo.find()
    };

    findById = async (id) => {
        return await Todo.findById(id);
    }

    createTarefa = async (todo)=> {
        return await Todo.create(todo);
    }

    editTarefa = async (id, todo) => {
        return await Todo.updateOne({_id:id }, todo);
    }

    deleteTarefa = async (id) => {
        return await Todo.deleteOne({ _id: id });
    }
}

module.exports = TodoService;