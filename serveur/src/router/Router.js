import express from "express"
import { get, Authentification, put, remove} from '../Users/login.js';
import { getUser, createUser } from "../controller/user_controller.js";
export function Router(){
    const router = express.Router()
    router.route('/login')
        .all((req, res, next) => {
            next()
        })
        .post(Authentification)
        .put(put)
        .delete(remove)

    router.route('/test')
        .all((req, res, next) => {next()})
        .get((req, res) => {getUser(req, res)})
        .post((req,res, next) => {createUser(req, res);})
    return router;
}