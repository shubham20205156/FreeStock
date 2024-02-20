const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/FreeStock";
// const mongoURI = "mongodb+srv://shubham:tPJKRoBbV1GRkNyC@cluster0.i1bb4nb.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = ()=>{

    mongoose.connect(mongoURI,()=>{
        console.log("connected to database successfully");
    })
}

module.exports = connectToMongo;