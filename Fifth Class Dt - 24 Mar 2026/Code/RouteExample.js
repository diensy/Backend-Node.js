const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("Hello Server");
})



app.get('/products',(req,res)=>{
    const products = [
        {
            id:1,
            label:'product 1 '
        },
        {
            id:2,
            label:'product 2 '
        },
        {
            id:3,
            label:'product 3 '
        },
        {
            id:4,
            label:'product 4 '
        }
    ]
    res.json(products)
})


app.get('/product/:id',(req,res)=>{
    const productId = parseInt(req.params.id)
      const products = [
        {
            id:1,
            label:'product 1 '
        },
        {
            id:2,
            label:'product 2 '
        },
        {
            id:3,
            label:'product 3 '
        },
        {
            id:4,
            label:'product 4 '
        }
    ]
    const getSingleProduct = products.find(product => product.id === productId)
    if(getSingleProduct){
        res.json(getSingleProduct)
    }else{
        res.status(404).send("Product is not found")
    }

})
const port = 5000;
app.listen(port,()=>{
    console.log('The server is running at ', port);
    
})