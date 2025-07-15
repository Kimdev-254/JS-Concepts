// API Call on Button Click - Using a function

function fetchUserData(){
    return new Promise((resolve, reject)=>{
        // simulate api delay
        setTimeout(()=>{
            const success=Math.random() > 0.3; // 70% chance of success
            success ? resolve('User loaded data') : reject('Failed to load user data');
        }, 1000);
    });
}

document.getElementById('loadBtn').addEventListener('click', ()=>{
    fetchUserData()
    .then(data => console.log(data))
    .catch(error => console.log(error))
})

// UseCase 2 - Loading App Settings Once on StartUp - Using a Promise direct instead of a function

const settingsPromise= new Promise((resolve, reject)=>{
    // Simulate fetching App Settings on  page load
    setTimeout(()=>{
        const loaded = true;
        loaded ? resolve('App Settings loaded ') : reject('Failed to load Settings')
    }, 1000);
});

settingsPromise
    .then(settings=>console.log(settings))
    .catch(err => console.log(err));