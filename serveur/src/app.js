import express from 'express'
import pkg from 'cors'
import 'dotenv/config'
const cors = pkg;
const router = express.Router()
// const express = require('express')
const app = express()
const port = 3000
const test = process.env.AUTEUR;
app.use(cors())
router.route('/')
    .all((req, res, next) => {
        next()
    })
    .get((req, res, next) =>{
        res.status(200).json({message: "Get"})
        console.log('get')
    })
    .post((req, res, next) =>{
        res.status(200).json({message: "Post"})
        console.log('post')
    })
    .put((req, res, next) =>{
        res.status(200).json({message: "Put"})
        console.log('put')
    })
    .delete((req, res, next) =>{
        res.status(200).json({message: "Delete"})
        console.log('delete')
    })
// app.get('/', (req, res) => {
//     req.
//     res.setHeader('content-type', 'application/json')
//     res.status(200).json({message: "Hello world"})
//     console.log('get')
// })
app.listen(port)
console.log(test)


