// Http Modules

const Http = require('http')

const server = Http.createServer((req,res)=>{
    console.log(req,'req');
    res.writeHead(200,{'content-type':'text/plain'});
    res.end("Hello node js from http modules")
    
})
const Port = 3000
server.listen(Port,()=>{
    console.log(`Server is listing in ${Port}`);
    
})