# Express.js Basic Server Example

## 📌 Overview

This project demonstrates a basic Express.js server that handles a simple route and sends a response to the client.

---

## 🚀 What is Express.js?

Express.js is a minimal and flexible Node.js web framework used to build web applications and APIs. It simplifies server creation, routing, and request handling.

---

## ❓ Why Use Express?

* Easy to create servers
* Simplified routing
* Middleware support
* Faster development
* Widely used in industry

---

## 📂 Code Example

```js
const express = require ('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("Hello world")
})

const port = 3000;

app.listen(port,()=>{
    console.log(`The server is running at the port ${port}`);
})
```

---

## ⚙️ Code Explanation

### 1. Import Express

```js
const express = require ('express');
```

Imports the Express module.

---

### 2. Create App

```js
const app = express();
```

Initializes the Express application.

---

### 3. Define Route

```js
app.get('/',(req,res)=>{
    res.send("Hello world")
})
```

* Handles GET request at `/`
* Sends "Hello world" as response

---

### 4. Set Port

```js
const port = 3000;
```

Defines the port number.

---

### 5. Start Server

```js
app.listen(port,()=>{
    console.log(`The server is running at the port ${port}`);
})
```

Starts the server and listens for requests.

---

## 🌐 How to Run

1. Install dependencies:

```
npm install express
```

2. Run server:

```
node index.js
```

3. Open browser:

```
http://localhost:3000/
```

---

## 🧠 Output

```
Hello world
```

---

## 🎯 Conclusion

Express.js simplifies backend development in Node.js by providing easy routing, middleware support, and efficient request handling.

---



2 . Ejs 