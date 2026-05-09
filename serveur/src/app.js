import express from 'express'
import pkg from 'cors'
import 'dotenv/config'
import { createUser } from './controller/user_controller.js';
import { connection } from './configuration/Connection.js';
import { RouterAuth } from './router/Router.js';
import User from './model/user_modele.js';
import verifyToken from './middleware/auth_middleware.js';
const cors = pkg;
const router = express.Router()
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
// app.use(express.urlencoded({ extended: true }));

// const users = User.findAll();
// console.log(users)

const routeAuth = RouterAuth();
connection(process.env.MONGO_URI);
app.listen(port);
app.use(router);
app.use(routeAuth);
app.use('/protected', verifyToken, ()=>{});



