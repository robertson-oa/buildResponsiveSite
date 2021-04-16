let username = document.querySelector('#username');
let phonenumber = document.querySelector('#tele');
let submit = document.querySelector('#submit');


submit.addEventListener('click',()=>{
    if(isNaN(phonenumber.value) || phonenumber.value.length > 10 || phonenumber.value.length <10){
        alert("please enter a valid number");
    }
    else{
        alert(`my username is ${username.value} and phonenumber is ${phonenumber.value}`);
    }
   
});