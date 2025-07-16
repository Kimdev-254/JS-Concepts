// How to accept user input in Javascript

// 1.Easy Way = window prompt
// let username = window.prompt("Please enter your name:");


// 2.Professional Way = HTML textbox

let username;

document.getElementById('myButton').onclick=function(){
    username = document.getElementById('myText').value;
    document.getElementById('myH1').textContent=`Hello ${username}`
}