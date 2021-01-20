const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

mongoose
    .connect('mongodb://localhost:27017/pagination_tutorial',{
        useUnifiedTopology:true,
        useNewUrlParser:true,
    })
    .then(()=>{
        console.log('mongoose connected');
    })

app.use('/api',require('./routes/api.route'));

app.listen(5046,()=>{
    console.log('Port is running in 5046')
})