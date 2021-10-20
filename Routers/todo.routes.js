const express = require('express');
const router = express.Router();

const ToDoController = require('../Controller/toDos.controller');

const todoController = new ToDoController();

//[GET]-------------------
router.get('/', todoController.getTarefa)

//[GET] por ID ------------------
router.get('/:id', todoController.getTarefaById)

//[POST]---------------
router.post('/add', todoController.createTarefa)

//[PUT]----------------
router.put('/:id', todoController.editTarefa)

//[DELETE]--------------
router.delete('/:id', todoController.deleteTarefa)


module.exports = router;