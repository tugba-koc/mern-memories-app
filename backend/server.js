import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import postRouter from './route/posts.js'

// initialize
dotenv.config();

// App Config
const app = express();

// bodyParser
app.use(bodyParser.json({limit:'30mb', extended: true}))
app.use(bodyParser.urlencoded({limit:'30mb', extended: true}))

// cors
app.use(Cors());

// router
app.use('/posts', postRouter) // it states localhost://5000/posts 

// Middlewares
// convert to json
app.use(express.json());

// Connection
const PORT = process.env.PORT;
const CONNECTION_URL = process.env.MONGO_URI;

// DB Config
mongoose
  .connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true}) // 2. parameter is used for not showing console error
  .then(() => {
    app.listen(PORT, () => console.log(`Running on port : ${PORT}`));
  })
  .catch((err) => console.log(err.message));