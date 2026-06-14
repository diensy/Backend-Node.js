const express = require('express');
const path = require('path');
const app = express();

// set the view engine as ejs

app.set('view engine','ejs');

// set the directory for the views 

app.set('views',path.join(__dirname,'views'));


const products = [
    {
        id:1,
        product:'Product 1'
    },
    {
        id:2,
        product:'Product 2'
    },
    {
        id:3,
        product:'Product 3'
    }
];

app.get('/',(req,res)=>{
    res.render('home',{title:'Home',products:products})
})


app.get('/about',(req,res)=>{
    res.render('about',{title:'About Page'})
})


app.listen(3000,()=>{
    console.log("Server is running.....")
})