if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require('express');
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors())

const Conn = require('./Connection/connection');
const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;


Conn(db_url, db_user, db_pass, db_data);

const port = 3001;

const TodoListRouter = require('./Routers/todo.routes')
app.use('/tarefas', TodoListRouter);

app.listen(process.env.PORT|| port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
});