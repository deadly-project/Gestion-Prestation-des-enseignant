import express from 'express'
import pkg from 'cors'
const cors = pkg;
// const express = require('express')
const app = express()
const port = 3000
app.use(cors())
app.get('/', (req, res) => {
    res.setHeader('content-type', 'application/json')
    res.status(200).json({message: "Hello world"})
    console.log('get')
})
app.listen(port)