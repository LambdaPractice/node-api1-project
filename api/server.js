// BUILD YOUR SERVER HERE
const users = require('./users/model.js');

const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (request, response) => {
    try{
        response.status(200).json(users.find());
    }catch{
        response.status(500).json({ errorMessage: "The user information could not be retrieved."})
    }
    
})

//create
server.post('/api/users', async  (request, response) =>{
    const user = request.body;

    if(!user.name|| !user.bio){
        response.status(400).json({message: "User must include name and bio"});
    }
    else{
        try{
            const newUser = await users.create(user);
            response.status(200).json(newUser);
        }
        catch (err){
            response.status(500).json({error: err.message});
        }
    }
})

//read
server.get('/api/users', async (request, response) => {
    try{
        const user = await users.find();
        response.status(200).json(user);
    }
    catch (err) {
        response.status(500).json({error: err.message});
    }
})


module.exports = server; // EXPORT YOUR SERVER instead of {}
