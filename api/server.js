// BUILD YOUR SERVER HERE
const Users = require('./users/model.js');

const express = require('express');

const server = express();

server.use(express.json());

server.get('/api/users', (request, response) => {
    try{
        response.status(200).json(users);
    }catch{
        response.status(500).json({ errorMessage: "The user information could not be retrieved."})
    }
    
})
module.exports = server; // EXPORT YOUR SERVER instead of {}
