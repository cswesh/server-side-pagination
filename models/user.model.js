const mongoose= require('mongoose');

const UserSchema = new mongoose.Schema({
    uid:Number,
    firstName:String,
    lastName:String,
    phone:String,
    address:{
        street:String,
        city:String,
        zip:String,
    },
});

const User = mongoose.model('user',UserSchema);
module.exports = User;