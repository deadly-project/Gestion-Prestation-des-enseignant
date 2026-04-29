import express from 'express'
import pkg from 'cors'
import 'dotenv/config'
import { createUser } from './controller/user_controller.js';
import { connection } from './configuration/Connection.js';
import { Router } from './router/Router.js';

const cors = pkg;
const router = express.Router()
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
// app.use(express.urlencoded({ extended: true }));

const test = Router()
connection(process.env.MONGO_URI)
app.listen(port)
app.use(router)
app.use(test)



