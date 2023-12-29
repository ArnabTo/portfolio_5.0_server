const express = require('express')
const app = express();
const cors = require('cors')
require('dotenv').config();
const port = process.env.PORT || 5000;
const ConnectDB = require('./src/db/ConnectDB')

//models
const Project = require('./src/model/ProjectModel')
//middleware
app.use(express.json());
app.use(cors());

ConnectDB()
.then(()=>{
    
    app.get('/projects', async(req,res)=>{
        try{
           const result = await Project.find();
           res.send(result)
        }catch(error){
            res.send({message: 'Faild to get data'})
        }
    })
    app.get('/', (req,res)=>{
        res.send('Portfolio 5.0 server is not runngin')
    })
    app.listen(port, ()=>{
        console.log('Portfolio 5.0 server is running well')
    })
})
