
let counter;

const decrease = document.getElementById("decrease").onclick=function(){
    counter = document.getElementById('counter').textContent
    counter = Number(counter)
    counter = counter - 1;
    fcounter = document.getElementById('counter').textContent = counter;
    console.log(fcounter);
}
    
const increase = document.getElementById("increase").onclick=function(){
    counter = document.getElementById('counter').textContent
    counter = Number(counter)
    counter = counter + 1;
    fcounter = document.getElementById('counter').textContent = counter;
    console.log(fcounter);
}
const reset = document.getElementById('reset').onclick = function(){
    counter = document.getElementById('counter').textContent
    counter = Number(counter)
    counter = 0
    rcounter = document.getElementById('counter').textContent = counter
    console.log(rcounter);
}