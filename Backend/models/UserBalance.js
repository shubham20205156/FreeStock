const mongoose = require('mongoose');
const { Schema } = mongoose
const userBalance = new Schema({

    email:{
        type:String,
        require:true
    },
    balance:{
        type:Number,
        require:true
    }
})

const UserBalance = mongoose.model('userBalance',userBalance);
module.exports =  UserBalance;