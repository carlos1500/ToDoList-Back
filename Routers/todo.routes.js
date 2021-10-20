const express = require('express');
const router = express.Router();

const ToDoController = require('../Controller/toDos.controller');

const todoController = new ToDoController();

//Leitura
router.get('/', todoController.getTarefa)

//Leitua por  ID
router.get('/:id', todoController.getTarefaById)

//postagem
router.post('/add', todoController.createTarefa)

//Atualização
router.put('/:id', todoController.editTarefa)

//Deleção
router.delete('/:id', todoController.deleteTarefa)


module.exports = router;