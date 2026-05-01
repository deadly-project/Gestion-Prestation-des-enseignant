import express from "express"
import { get, Authentification, put, remove} from '../Users/login.js';
import { getUser, createUser, verifyUser } from "../controller/user_controller.js";
export function Router(){
    const router = express.Router()
    router.route('/login')
        .all((req, res, next) => {
            next()
        })
        .post(Authentification)
        .put(put)
        .delete(remove);

    router.route('/signin')
        .all((req, res, next) => {next()})
        .get((req, res) => {getUser(req, res)})
        .post((req,res, next) => {createUser(req, res);});
    
    router.route('/verify')
        .post((req, res) =>{
            verifyUser(req, res)
        })
    
    return router;
}