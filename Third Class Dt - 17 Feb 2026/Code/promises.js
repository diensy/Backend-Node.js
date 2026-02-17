// Promises

function promis(time){
    return new Promise((resolve)=>setTimeout(resolve,time))
}

console.log("Promise Start")

promis(2000).then(()=>{
    console.log("this is 2 secondds promise resolved")
})

console.log("end");



function divde(num1,num2){
    return new Promise((resolve,reject)=>{
        if(num2 === 0){
            reject("number can not divide in 0");
        }else{
            resolve(num1/num2)
        }
    })
}


divde(10,5).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error);
    
})