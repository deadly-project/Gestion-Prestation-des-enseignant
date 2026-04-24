import express from 'express'
import pkg from 'cors'
import 'dotenv/config'
import { get, post, put, remove} from './Users/login.js';
import { createUser } from './controller/testController.js';

const cors = pkg;
const router = express.Router()
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
// app.use(express.urlencoded({ extended: true }));
router.route('/')
    .all((req, res, next) => {
        next()
    })
    .get(get)
    .post(post)
    .put(put)
    .delete(remove)
router.route('/test')
    .all((req, res, next) => {
        next()
    })
    .post((req,res, next) => {
        res.status(200).json({message: "Post test"})
        createUser(req, res);
    })

app.listen(port)
app.use(router)



