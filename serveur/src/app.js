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
router.route('/')
    .all((req, res, next) => {
        next()
    })
    .get(get)
    .post(post)
    .put(put)
    .delete(remove)
router.route('/test')
    .post((req,res, next) => {
        createUser(req, res);
        console.log('test reussi')
    })


    
// app.get('/', (req, res) => {
//     req.
//     res.setHeader('content-type', 'application/json')
//     res.status(200).json({message: "Hello world"})
//     console.log('get')
// })
app.listen(port)
app.use(router)



