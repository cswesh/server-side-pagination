const router = require('express').Router()
const user = require('../models/user.model')
const { populateDB } = require('../populate_db')

/*
Implement pagination

1. GET /users - should return only the first page with default size (10)
i.e., = GET /users === /users?page=1&size=10

2. GET /users?page=3&size=20
return us page 3 with size 20 i.e., skipping first 40 records
*/

router.get('/users',(req,res,next)=>{
    try {
        let {page,size} = req.query
        if(!page){
            page = 1
        }
        if(!size){
            size = 10
        }

        const limit = parseInt(size)
        const skip = (parseInt(page) -1 ) * size;

        //const users = await User.find({},{},{limit:limit, skip:skip})
        const users = await User.find().limit(limit).skip(skip);
        //res.send(users);
        res.send({
            page,
            size,
            data: users,
        })

    } catch (error) {
        res.sendStatus(500).send(error.message)
    }
})