import User from "../model/user_modele.js"
import bcryptjs from "bcryptjs"
import "jsonwebtoken"

export async function get(req, res) {
    res.status(200).json({message: "Get"})
        console.log('get')
}
export async function Authentification(req, res) {
    console.log("username :"+req.body.username)
    
    
    const user = new User(req.body)
    console.log("requête trouver ou je sais pas"+user)
    res.status(200).json({message: "Post authentification"})
    console.log('post authentification')
}
export async function put(req, res) {
    res.status(200).json({message: "Put"})
        console.log('put')
}
export async function remove(req, res) {
    res.status(200).json({message: "Remove"})
        console.log('Remove')
}
export async function test(){

}