// Promise - Rep future value (resolved/rejected) 
// useCase: API calls and file reads

let p= new Promise((resolve, reject)=>{
    let a=1+3;
    if(a == 2){
        resolve("success");
    } else {
        reject("Failed");
    }
})

p.then((message)=>{
    console.log(message);
}).catch((message)=>{
    console.log(message);
})