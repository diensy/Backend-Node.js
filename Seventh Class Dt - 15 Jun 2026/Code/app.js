const express = require('express');

const app = express();


// Middleware

app.use(express.json())


const book = [
    {
        id:1,
        title:"Book1"
    },
    {
        id:2,
        title:"Book2"
    }
]

app.get('/',(req,res)=>{
    res.json({
        message:"Welcome to our BookStore"
    })
})

app.get('/get',(req,res)=>{
    res.json(book)
})


app.listen(3000,()=>{
    console.log("App is running")
})