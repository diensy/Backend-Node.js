const express = require('express');

const app = express()

const myFirstMiddleware = (req,res,next)=>{
    console.log("This is my first middleware run in every request !");
    next();
}

app.use(myFirstMiddleware)

app.get('/',(req,res)=>{
    res.send('Home Page');
});

app.get('/about',(req,res)=>{
    res.send("About page")
});

app.listen(3000,()=>{
    console.log("The server is running at port 3000 !")
})