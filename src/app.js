const express = require('express')
const app = express();

app.use(express.json());

app.get('/health' , (req,res) =>{
    
res.json({status:"ok"})
})

app.get('/api/users' , (req,res) =>{
 res.json([{id:1,name:"Alis"} , {id:2 , name:"Bob"}])
})

app.post('/api/users' , (req,res) =>{
const {name} = req.body
if(!name) return res.status(400).json({error:'name is required'})
    res.status(201).json({id:3,name})
})

module.exports = app

//pallavi
