const express = require('express')
const app = express();
const dotenv = require('dotenv').config();
// const bodyparser = require('body-parser')
const cors = require('cors')
const PORT = process.env.PORT || 8000;
const dbconnection = require('./db/index')

dbconnection.on('error',()=>{
    console.log('error')
})

app.use(express.json()); // JSON יכולת לקרוא ולהציג מידע מ
app.use(express.urlencoded({extended:true})); // params יכולת לשלוף מידע מ
app.use(cors()); // מוריד הרשאות גישה -  גורם לאקספרס לתת גישה לכולם להיכנס לסרבר / אתר

app.use('/',express.static('client'));

// app.get('/',(req,res)=>{
//     res.send('<h1>This is the main page</h1>')
// })
app.get('/',(req,res)=>{
    res.send("<h1> This is main page </h1>")
})

app.listen(PORT,()=>{
    console.log(`Logged to http://localhost:${PORT}`)
})