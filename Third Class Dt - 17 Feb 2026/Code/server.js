
// // Callback function 

function person(name,callbackfn){
    console.log("Hello My Name is ", name);
    callbackfn()
    
}


function address(){
    console.log("India")
}


person('Dinesh',address)


// Callback Hell function 


const fs = require('fs');

fs.readFile('input.txt','utf-8',(error,data)=>{
    if(error){
        console.error("Error in reading file",error)
        return; //-> This first call back 
    }

    const modifyFileileDate = data.toUpperCase();

    fs.writeFile('outPut.txt',modifyFileileDate,(err)=>{
        if(err){

            console.error('Error in writing file',err);
            return;
        }
        console.log('Data written in the new file '); // -> 2nd callback 
    })
    
    fs.readFile('outPut.txt','utf-8',(error,data)=>{
        if(error){

            console.error("Error in reading Output File",error);
            return;
        } 
        console.log("Reading out put file = ",data); // -> third call back
    })
    
})