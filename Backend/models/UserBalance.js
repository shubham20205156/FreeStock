const mongoose = require('mongoose');
const {Schema} = mongoose
const userBalance = new Schema({

    email:{
        type:email,
        required:true
    },
    balance:{
        type:Number,
        require:true
    }
})

const UserBalance = mongoose.model('userBalance',userBalance);
export default UserBalance;