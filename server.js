const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const app = express();

mongoose.connect("mongodb://localhost/testing", {
    useUnifiedTopology: true,
    useNewUrlParser: true
}) 
  



app.get('/', (req, res)=>{
    res.send("hello world")
})



app.listen(3030, ()=>{
    console.log('server is running...');
})