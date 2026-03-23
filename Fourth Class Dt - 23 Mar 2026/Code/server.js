const EventEmmiter = require('events');

const myFirstEmitter = new EventEmmiter();

myFirstEmitter.on('greet',(name)=>{
    console.log("Hello "+ `${name}`)
})

myFirstEmitter.emit('greet','Dinesh');


// Custom listener

class myEmitter extends EventEmmiter{
    constructor(){
        super()
        this.greeting = "Hello"
    }

    greet(name){
        this.emit('greeting',`${this.greeting},${name}`)
    }
}


const myCustomEmitter = new myEmitter();
myCustomEmitter.on('greeting',(input)=>{
    console.log(`Greeting Events  ${input}`)
})

myCustomEmitter.greet("Dinesh")