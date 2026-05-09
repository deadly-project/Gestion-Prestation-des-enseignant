import express from "express"
import {Authentification} from '../Users/login.js';
import { getUser, createUser, verifyUser } from "../controller/user_controller.js";
export function RouterAuth(){
    const router = express.Router()
    router.route('/login')
        .all((req, res, next) => {
            next()
        })
        .post((req, res) =>{
            Authentification(req, res)
        })

    router.route('/signin')
        .all((req, res, next) => {next()})
        .post((req,res, next) => {createUser(req, res);});
        //.get((req, res) => {getUser(req, res)})
    
    router.route('/verify')
        .post((req, res) =>{
            verifyUser(req, res)
        })
    
    return router;
}