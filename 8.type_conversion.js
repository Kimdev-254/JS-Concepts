// type conversion
// area =pi * r^2

// let pi = 3.14;
// let r = window.prompt('Enter radius:')
// radius = Number(radius)
// area = pi * r^2
// console.log(`Area of circle is: ${area}`);
const pi=3.14;
let radius;

document.getElementById('myButton').onclick= function(){
    radius = document.getElementById('radius').value;
    radius = Number(radius)
    const area = pi * radius ^ 2

    document.getElementById('myH1').textContent=`Area of Circle: ${area}`
    
}