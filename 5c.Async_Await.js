// Async/Await - Syntantic sugar over promises for clean code
// useCase: Fetching data from server

const location='Google'

function makeRequest(){
    return new Promise((resolve, reject)=>{
        console.log(`Making request to ${location}`);
        if (location == 'Google'){
            resolve('Google says hi');
        }
        else{
            reject('We can only talk to Google')
        }
        
    })
}

function processRequest(){
    return new Promise((resolve, reject)=>{
        console.log('Processing response');
        resolve(`Extra information + ${response}`)
    })
}

// makeRequest('Google').then(response=>{
//     console.log('Response recieved')
//     return processRequest(response)
// }).then(processedResponse=>{
//     console.log(processedResponse)
    
// }).catch(err=>{
//     console.log(err)
// })


async function doWork(){
   try{
    const response = await makeRequest()
    console.log('Response was recieved');
    const processedResponse = await processRequest(response)
    console.log(processedResponse);
   } catch (err){
    console.log(err);
    
   }
} 
doWork()