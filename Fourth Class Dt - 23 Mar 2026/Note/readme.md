1. Event Emitter# Node.js EventEmitter Example

## 📌 Overview

EventEmitter is a built-in class in Node.js that allows you to create and handle custom events using an event-driven approach.

👉 In simple words:

It lets different parts of your code talk to each other using events.
---

## 📂 Code Example

```js
const EventEmmiter = require('events');

const myFirstEmitter = new EventEmmiter();

myFirstEmitter.on('greet',(name)=>{
    console.log("Hello "+ `${name}`)
})

myFirstEmitter.emit('greet','Dinesh');
```

---

## ⚙️ How It Works

1. Import the `events` module.
2. Create an instance of `EventEmitter`.
3. Register a listener using `.on()` for the `greet` event.
4. Trigger the event using `.emit()` and pass data.
5. The listener receives the data and executes.

---

## 🧠 Output

```
Hello Dinesh
```

---

## 🔑 Key Concepts

* **EventEmitter**: Handles events in Node.js
* **.on()**: Listens to an event
* **.emit()**: Triggers an event
* **Callback**: Function executed when event occurs

---

## 🚀 Use Cases

* Handling HTTP requests
* Working with streams
* Custom event systems
* Real-time applications

---

## 📚 Conclusion

EventEmitter is a powerful feature in Node.js that allows you to build scalable and asynchronous applications using an event-driven approach.

---
