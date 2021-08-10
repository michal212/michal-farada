const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8080 ;
// const CONNECTION_URL= process.env.CONNECTION_URL ;
const studentRoute = require('./routes/studentRouter')
const db = require('./db') // index יתפוס קבצי
const express = require('express');
const cors = require("cors");
const app = express();
const path =require('path')

 // "dev": "concurrently --kill-others-on-fail \" npm run server \" \"npm run client\"",

app.use(express.json()); // JSON יכולת לקרוא ולהציג מידע מ
app.use(express.urlencoded({extended:true})); // params יכולת לשלוף מידע מ
app.use(cors());

db.on('error',()=> console.log("error"))

app.listen(process.env.PORT || 8080, ()=>{
    console.log(`Server is up one port:8080`);
})

app.use('/school',studentRoute)

if (process.env.NODE_ENV === 'production'){ // NODE_ENV משתנה סביבה מובנה
    app.use(express.static(path.join(__dirname,'../client/build')))
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname, '../client/build','index.html'))
    });
}


// app.get('/', (req,res)=>{
//     res.send("Hello World")
// });