# 🌐 Node.js HTTP Module (http) 

## 📌 What is HTTP Module in Node.js?

The **HTTP Module** is a **built-in core module** in Node.js that allows us to:

✅ Create a web server  
✅ Handle client requests (browser / API call)  
✅ Send responses back to the client  
✅ Build APIs without using frameworks like Express  

📌 The best part is:  
⚡ It comes pre-installed with Node.js, so no need to install anything.

---

# ✅ Importing HTTP Module

In Node.js, we import the HTTP module like this:

## ✅ Code Example (HTTP Module Server)

```js
// Http Modules

const Http = require('http')

const server = Http.createServer((req, res) => {
    console.log(req, 'req');

    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end("Hello node js from http modules")
})

const Port = 3000

server.listen(Port, () => {
    console.log(`Server is listing in ${Port}`);
})


# 🚦 Node.js Routes (Routing) — Complete Notes + Example Code

---

## 📌 What is Route?

A **Route** means the **path (URL)** that a user visits in a browser or API call.

Example Routes:

- `/` → Home page route
- `/about` → About page route
- `/project` → Project page route

📌 In simple words:

✅ **Route = URL Path**

---

## 📌 What is Routing?

**Routing** means deciding **what response should be given** when the user visits a specific route.

Example:

- If user visits `/` → show home page response
- If user visits `/about` → show about page response
- If user visits `/project` → show project response
- If user visits unknown route → show 404 error

---

# 🧠 Why Routes are Important?

Routes are important because they help us:

✅ Create multiple pages in one server  
✅ Build APIs with different endpoints  
✅ Control what data is returned for each URL  
✅ Make application structured  

Without routes, every URL would show the same output.

---

# ⭐ Types of Routes

## 1️⃣ Static Routes
These are fixed routes:

- `/`
- `/about`
- `/project`

---

## 2️⃣ Dynamic Routes (Advanced)
These contain parameters:

Example:
- `/user/101`
- `/product/55`

Express handles dynamic routing easily, but in HTTP module we manually handle it.

---

# 🟦 How Node.js Checks Routes?

Node.js uses:

``js

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