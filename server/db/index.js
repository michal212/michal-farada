const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const MONGO_URL = process.env.MONGO_URL

const connectToDB = async (req,res)=>{
    await mongoose.connect(MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology: true
    })
}

connectToDB().then(()=>{
    console.log('MongoDB Atlas Connected')
}).catch((err)=>{
    console.log(`Error Message - ${err.message}`)
})

const connection = mongoose.connection;

module.exports = connection;