console.log("Hello Node.js!");

const array = [1, 2, 3, 4, 5];

console.log("Array elements:", array);

setTimeout(()=>{
    console.log("This message is displayed after 2 seconds");
}, 2000);


console.log("End of script.");

// require
const myModules = require('./firstmodules/firstmodules');

const add = myModules.add(5, 3);
console.log("Addition:", add);


try{
    const divide = myModules.deivde(10,10)
    console.log("Divide = ",divide);
    
}catch(error){
    console.error("Error message ",error.message);
    
}


//  path module 

const path = require('path')

console.log('Directory name',path.dirname(__filename));
console.log('Base name',path.basename(__filename));
console.log('Extension name',path.extname(__filename));

const JoinPath = path.join('/user','/document')
console.log('join path',JoinPath);


//  File system 

const fs = require('fs');

const dataFolder = path.join(__dirname,'Data')

if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
    console.log('The folder is created ');
    
}
const filepath = path.join(dataFolder,'example.txt')

fs.writeFileSync(filepath,"Hello Dinesh keep going ")

console.log('File created Successfully');


const readFile = fs.readFileSync(filepath,'utf-8')

console.log('file content : ', readFile)

fs.appendFileSync(filepath,'\n this is new line hey it go')

console.log('New line add')


// async way to create file

const asyncCreateFile = path.join(dataFolder,'asyncFile.txt');
fs.writeFile(asyncCreateFile,'Hello , Async File In node.js',(err)=>{
    if(err){
        throw err;
    }else{
        console.log("The async file is created ");
        fs.readFile(asyncCreateFile,'utf-8',(err,data)=>{
            if(err) throw err;
            console.log("async file data",data);
            
        })

        fs.appendFile(asyncCreateFile,'\nThis is async add file',(err)=>{
            if(err) throw err;
            console.log("New conten add in the async file ");
            
        })
    }
})