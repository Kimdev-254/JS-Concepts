// cookies - a small text file stored on your cmputer that is used to
// remember information about you and saved in name value pairs


const firstText =document.querySelector('#firstText');
const lastText =document.querySelector('#lastText');
const submitBtn =document.querySelector('#submitBtn');
const cookieBtn =document.querySelector('#cookieBtn');

submitBtn.addEventListener('click', ()=>{
    setCookie("firstName", firstText.value, 365);
    setCookie("lastName", lastText.value, 365);
})

cookieBtn.addEventListener('click', ()=>{
    firstText.value = getCookie('firstName');
    lastText.value = getCookie('lastName');
})


function setCookie(name, value, daysToLive){
    const date =new Date(); //get new date object
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000)); // convert days to milliseconds
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name} = ${value}; ${expires}; path=/`; // set cookie with name, value, expiration date and path

}
function deleteCookie(name){
    setCookie(name,null,null)
}
function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split(';');
    let result = null;

    cArray.forEach(element=>{
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })
    return result;
}