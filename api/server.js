const Users = require('./users/model')
// BUILD YOUR SERVER HERE
const express = require('express')
const server = express()


//ENDPOINTS

server.get('/hello', (req, res) => {
    res.json({ message: 'hello'})
})

server.get('/api/users', (req, res) => {
    Users.find()
    .then(users => {
        res.json(users)
    })
    .catch(err => {
        res.status(500).json({message: "something has gone wrong"})
    })
})
module.exports = server; // EXPORT YOUR SERVER instead of {}
