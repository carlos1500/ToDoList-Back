const mongoose = require("mongoose");

const TarefaServices = require("../Services/toDos.service");

const tarefaServices = new TarefaServices();

class TarefaController {
  getTarefa = async (req, res) => {
    const todo = await tarefaServices.findAll();
    res.send(todo);
  };

  getTarefaById = async (req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(403).send("ID inválido!");
      return;
    }

    const todo = await tarefaServices.findById(id);

    if (!todo) {
      res.status(404).send("Tarefa não encontrado!!");
      return;
    }

    res.status(200).send(todo);
  };

  createTarefa = async (req, res) => {
    const todo = req.body;
    const todoSalvo = await tarefaServices
      .createTarefa(todo)
      .then(() => {
        res.send({ message: `vaga criada com sucesso` });
      })
      .catch((err) =>
        res.status(500).send({ error: `erro no servidor: ${err}` })
      );
  };

  editTarefa = async (req, res) => {
    const id = req.params.id;
    const todo = req.body;
    await tarefaServices
      .editTarefa(id, todo)
      .then(() => {
        res.status(200).send({ message: "ToDo atualizado com Sucesso!!" });
      })
      .catch((err) =>
        res.status(500).send({ error: `Erro no servidor ${err}` })
      );
  };

  deleteTarefa = async (req, res) => {
    const id = req.params.id;
    await tarefaServices
      .deleteTarefa(id)
      .then(() =>
        res.status(200).send({ message: "Tarefa excluida com sucesso!!" })
      );
  };
}

module.exports = TarefaController;
