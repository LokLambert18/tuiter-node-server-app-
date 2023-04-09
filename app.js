import mongoose from "mongoose";
import express from 'express'
import cors from 'cors'
import HelloController
  from "./controllers/hello-controller.js"
import UserController
  from "./controllers/users/users-controller.js"
import TuitsController
  from "./tuits/tuits-controller.js";
const app = express()
app.use(express.json());
app.use(cors())
HelloController(app)
UserController(app)
TuitsController(app);
app.listen(4000)
mongoose.connect('mongodb://127.0.0.1:27017/tuiter');

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
 || 'mongodb://127.0.0.1:27017/tuiter'
mongoose.connect(CONNECTION_STRING);