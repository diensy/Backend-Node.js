# 📌 Callbacks & Callback Hell (Node.js Notes)

## ✅ 1. What is a Callback?

A **callback** is a function that is passed as an argument to another function, and it is executed **after the task is completed**.

Callbacks are mainly used in **asynchronous programming** in JavaScript / Node.js.

### 🔥 Why Callbacks are Used?
Because JavaScript is **non-blocking**.

That means JavaScript does not wait for slow tasks like:
- Reading files
- API calls
- Database queries
- Timers (setTimeout)

Instead, it continues execution and calls the callback when the task is finished.

---

## 📌 Callback Example

```js
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function done() {
    console.log("Task completed!");
}

greet("Dinesh", done);

output:-

Hello Dinesh
Task completed!

# ⚠️ Callback Hell (Node.js) - Notes + Example

## ✅ What is Callback Hell?

**Callback Hell** happens when multiple asynchronous operations are written inside one another using callbacks.

It creates code that becomes:
- hard to read 😵
- hard to debug 🐛
- difficult to maintain ⚙️

Callback Hell is also called:

### 🔥 Pyramid of Doom
Because the code structure looks like a pyramid due to too many nested blocks `{}`.

---

## 📌 Why Callback Hell Happens?

Because Node.js works with **asynchronous tasks**, like:
- Reading files
- Writing files
- API calls
- Database queries

When we perform many tasks one after another using callbacks, they become deeply nested.

---

## ⚠️ Callback Hell Example (File Handling)

``js
const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("Error reading file:", err);
        return;
    }

    const upperData = data.toUpperCase();

    fs.writeFile("output.txt", upperData, (err) => {
        if (err) {
            console.log("Error writing file:", err);
            return;
        }

        fs.readFile("output.txt", "utf-8", (err, newData) => {
            if (err) {
                console.log("Error reading output file:", err);
                return;
            }

            console.log("Final Output:", newData);

            fs.appendFile("output.txt", "\nDONE", (err) => {
                if (err) {
                    console.log("Error appending file:", err);
                    return;
                }

                console.log("Text appended successfully!");
            });
        });
    });
});


# ✅ Promises in JavaScript

## 📌 What is a Promise?

A **Promise** is an object in JavaScript that represents the **future result** of an asynchronous operation.

It tells us that:
- the task is still running ⏳
- or it is completed successfully ✅
- or it failed ❌

So Promise is used to handle async code in a cleaner way.

---

## 🔥 Why Promises are Used?

Promises are mainly used to solve the problem of:

### ⚠️ Callback Hell (Pyramid of Doom)

When we use multiple callbacks inside callbacks, code becomes messy and hard to manage.

Promises make code:
- cleaner ✨
- easier to understand 👀
- easier to handle errors 🛠️
- more readable than nested callbacks 📌

---

## 📌 Promise States

A Promise has 3 states:

### 1️⃣ Pending
Task is still running (not completed yet).

### 2️⃣ Fulfilled (Resolved)
Task completed successfully.

### 3️⃣ Rejected
Task failed due to error.

---

## 📌 Promise Methods

### ✅ `.then()`
Runs when promise is resolved.

### ❌ `.catch()`
Runs when promise is rejected.

### 🔁 `.finally()`
Runs always (resolved or rejected).

---

# ✅ Example 1: Promise with setTimeout (Delay)

``js
// Promises

function promis(time){
    return new Promise((resolve)=>setTimeout(resolve,time))
}

console.log("Promise Start")

promis(2000).then(()=>{
    console.log("this is 2 secondds promise resolved")
})

console.log("end");

# ✅ Async and Await (JavaScript / Node.js Notes)

## 📌 What is Async/Await?

**Async/Await** is a modern way to handle **Promises** in JavaScript.

It makes asynchronous code look like **synchronous code**, which is:
- easier to read 👀
- easier to write ✍️
- easier to debug 🐛

Async/Await is built on top of **Promises**.

---

# 🔥 Why Async/Await is Used?

Async/Await is used because:

✅ It removes `.then()` chaining  
✅ It makes code clean and readable  
✅ It solves callback hell problem  
✅ It improves error handling using `try/catch`  
✅ It looks like normal synchronous code  

---

# 📌 Important Keywords

## ✅ 1. async
The `async` keyword is used before a function to make it an **async function**.

An async function always returns a **Promise**.

Example:
``js
function delay(time){
    return new Promise((resolve)=>{
        setTimeout(resolve,time)
    })
}


async function delaygreet(name) {
    await delay(2000);
    console.log(name);
    
}

delaygreet("Dinesh")

4. Event emitter