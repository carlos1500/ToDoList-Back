const Todo = require('../Models/TodoList');

class TodoService {
    //Conectar com o modelo e retornar a lista dos Todos
    findAll = async () => {
        return await Todo.find()
    };

    //Conectar com o modelo e retornar um Todo por ID
    findById = async (id) => {
        return await Todo.findById(id);
    }

    //Criar um Todo
    createTarefa = async (todo)=> {
        return await Todo.create(todo);
    }

    //Editar um Todo (repare que o parâmetro id entra aqui, pois a edição ocorrerá por id informado)
    editTarefa = async (id, Todo) =>{
        return await Todo.updateOne({ _id: id }, Todo);
    }

    //Deletar um Todo
    deleteTarefa = async (id) => {
        return await Todo.deleteOne({ _id: id });
    }
}

module.exports = TodoService;