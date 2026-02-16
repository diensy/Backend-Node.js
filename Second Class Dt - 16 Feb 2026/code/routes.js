const http = require('http')

const server = http.createServer((req,res)=>{
    const url = req.url;
    if (url === '/'){
        res.writeHead(200,{'content-type':'text/plain'});
        res.end("This is my home page ")
    }else if(url === "/project"){
        res.writeHead(200,{'content-type':'text/plain'});
        res.end("I am in my projects page!")
    }else if(url === '/about'){
        res.writeHead(200,{'content-type':'text/plain'});
        res.end("I am in my about page")
    }else{
        res.writeHead(404,{'content-type':'text/plain'});
        res.end("This page is not found")
    }
})


const port = 3000

server.listen(port,()=>{
    console.log(`Server is running at `,port);
    
})