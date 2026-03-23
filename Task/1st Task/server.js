/*
🟢 Task 1: Custom EventEmitter

👉 Goal: Practice events

Task:

Create an event called "login"
Pass username as data
Print:
user Dinesh logged In 
*/


const EventEmitter = require('events');
// For Login
const loginEmitter = new EventEmitter();

loginEmitter.on('login',(name)=>{
    console.log(`user ${name} logged In `);
    
});

// For Logout 

loginEmitter.on('logout',(name)=>{
    console.log(`User ${name} logout successfully`)
})

loginEmitter.emit('login','Dinesh')
loginEmitter.emit('logout','Dinesh')

/*
🟢 Task 2: Multiple Listeners

👉 Goal: Understand event behavior

Task:

Add 2 listeners to same event "greet"
Both should print different messages

👉 Expected:

Hello Dinesh
Welcome Dinesh

*/

loginEmitter.on('greet',(name)=>{
      console.log(`Hello ${name}`)
})
loginEmitter.on('greet',(name)=>{
    console.log(`Welcome ${name}`)
})

loginEmitter.emit('greet','Dinesh')