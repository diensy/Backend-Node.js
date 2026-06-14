// First task

const express = require('express');

const app = express();

// const requestLogger = (req,res,next) =>{
//     console.log("Request received")
//     next()
// }
// app.use(requestLogger)
// app.get('/',(req,res)=>{
//     res.send('Home Page')
// })




// Second Task:- Create two middleware functions:

// const loggerMiddleware = (req,res,next)=>{
//     console.log("Logger Middleware Executed");
//     next();
// }

// const authMiddleware = (req,res,next) =>{
//     console.log("Auth Middleware Executed")
//     next();
// }

// app.use(loggerMiddleware)
// app.use(authMiddleware)

// app.get('/',(req,res)=>{
//     res.send("Home page")
// })


// Third Task : - route-specific middleware.

// const aboutMiddleware = (req,res,next)=>{
//     console.log("About Page Accessed")
//     next()
// }

// app.get('/',(req,res)=>{
//     res.send("Home page")
// })

// app.get('/about',aboutMiddleware,(req,res)=>{
//     res.send("About Page")
// })


//Fourth Task:- Now let's use middleware to inspect the request.

// const requestInfoMiddleware = (req,res,next)=>{
//     console.log(`Method:${req.method} and URL:${req.url}`);
//     next();
// }

// app.use(requestInfoMiddleware);

// app.get('/',(req,res)=>{
//     res.send('Home page')
// })

// app.get('/about',(req,res)=>{
//     res.send('About page')
// })

// Fifth task:- blockAboutMiddleware 

const blockAboutMiddleware = (req,res,next)=>{
if(req.url == '/about'){
    res.send('Access Denied')
}    
}
app.get('/',(req,res)=>{
    res.send('Home Page');
})

app.get('/about',(req,res)=>{
    res.send("About Page")
})
app.listen(3000,()=>{
    console.log("App is running...")
})