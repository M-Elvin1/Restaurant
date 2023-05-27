var bar= document.getElementById('bar');
var nav= document.getElementById('main-nav');
var close= document.getElementById('close');

bar.addEventListener('click', function(){
    nav.classList.add('active')
});

close.addEventListener('click', function(){
    nav.classList.remove('active')
});


// form script 

const logIn= document.getElementById('login');
const register= document.getElementById('register');
const logInForm= document.getElementById('login-form');
const regForm= document.getElementById('reg-form');
const titleContent=document.querySelectorAll('.title-content');



logIn.addEventListener('click', function(e){
    if(register.classList.contains){
        register.classList.remove('title-border');
    }
    this.classList.add('title-border');
    logInForm.classList.add('show');
    regForm.classList.remove('show');
});
register.addEventListener('click', function(e){
    if(logIn.classList.contains){
        logIn.classList.remove('title-border');
    }
    this.classList.add('title-border');
    logInForm.classList.remove('show')
    regForm.classList.add('show');

});








