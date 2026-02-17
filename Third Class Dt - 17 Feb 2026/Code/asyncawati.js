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