import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

// initialize
dotenv.config();

// const {getTodos, createTodo, updateTodo, deleteTodo} = require('./controllers/todoController.js') ;

// App Config
const app = express();

// bodyParser
app.use(bodyParser.json({limit:'30mb', extended: true}))
app.use(bodyParser.urlencoded({limit:'30mb', extended: true}))

// cors
app.use(Cors());

// Middlewares
// convert to json
app.use(express.json());

// Connection
const port = process.env.PORT || 8000;
const CONNECTION_URL = process.env.MONGO_URI;

// DB Config
mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(port, () => console.log(`Running on port : ${port}`));
  })
  .catch((err) => console.log(err));

// // API Endpoints
// // Get Todos
// app.get('/todos', getTodos)

// // Create a new todo
// app.post('/todos', createTodo)

// // Update todo
// app.put('/todos/:id', updateTodo)

// // Delete a todo
// app.delete('/todos/:id', deleteTodo)