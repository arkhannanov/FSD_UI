var surnameInput = document.getElementById('form4__surname-input');
var surnameMessage = document.getElementById('form4__surname-message');
var surnameErrorMessage = document.getElementById('form4__surname-error-message');

var nameInput = document.getElementById('form4__name-input');
var nameMessage = document.getElementById('form4__name-message');
var nameErrorMessage = document.getElementById('form4__name-error-message');

var patronymicInput = document.getElementById('form4__patronymic-input');
var patronymicMessage = document.getElementById('form4__patronymic-message');
var patronymicErrorMessage = document.getElementById('form4__patronymic-error-message');

var phoneInput = document.getElementById('form4__phone-input');
var phoneMessage = document.getElementById('form4__phone-message');
var phoneErrorMessage = document.getElementById('form4__phone-error-message');

var emailInput = document.getElementById('form4__email-input');
var emailMessage = document.getElementById('form4__email-message');
var emailErrorMessage = document.getElementById('form4__email-error-message');


var submitForm = document.getElementById('submit');
var completeForm = document.getElementById('completeform');

var fill1 = false;
var fill2 = false;
var fill3 = false;
var fill4 = false;
var fill5 = false;

var error1 = true;
var error2 = true;
var error3 = true;
var error4 = true;
var error5 = true;

var message1 = "Должно быть по крайней мере 3 симовола.";
var formNotComplete = "Форма не закончена!"

surnameInput.addEventListener('keyup', checkSurnameInput);
nameInput.addEventListener('keyup', checkNameInput);
patronymicInput.addEventListener('keyup', checkPatronymicInput);
phoneInput.addEventListener('keyup', checkPhoneInput);
emailInput.addEventListener('keyup', checkEmailInput);

submitForm.addEventListener('click', submit);

function checkSurnameInput(e) {
    let usedInput = e.target;
    let inputValue = usedInput.value;

    if(inputValue.length <= 3){
        error1=true;
    }
    else
    {
        error1=false;
    }

    if(inputValue.length>0)
    {
        fill1 = true;
    }
    else
    {
        fill1 = false; 
    }
}

function checkNameInput(e) {
    let usedInput = e.target;
    let inputValue = usedInput.value;

    if(inputValue.length <= 3){
        error2=true;
    }
    else
    {
        error2=false;
    }

    if(inputValue.length>0)
    {
        fill2 = true;
    }
    else
    {
        fill2 = false; 
    }
}

function checkPatronymicInput(e) {
    let usedInput = e.target;
    let inputValue = usedInput.value;

    if(inputValue.length <= 3){
        error3=true;
    }
    else
    {
        error3=false;
    }

    if(inputValue.length>0)
    {
        fill3 = true;
    }
    else
    {
        fill3 = false; 
    }
}

function checkPhoneInput(e) {
    let usedInput = e.target;
    let inputValue = usedInput.value;

    if(inputValue.length <= 3){
        error4=true;
    }
    else
    {
        error4=false;
    }

    if(inputValue.length>0)
    {
        fill4 = true;
    }
    else
    {
        fill4 = false; 
    }
}

function checkEmailInput(e) {
    let usedInput = e.target;
    let inputValue = usedInput.value;

    if(inputValue.length <= 3){
        error5=true;
    }
    else
    {
        error5=false;
    }

    if(inputValue.length>0)
    {
        fill5 = true;
    }
    else
    {
        fill5 = false; 
    }
}

function submit(){

if (error1==true){
    surnameErrorMessage.innerHTML=message1;
    surnameMessage.innerHTML="error";
    surnameMessage.style.cssText="background-image: url('./img/form-orange.png');";
    setTimeout(() => {
        surnameErrorMessage.innerHTML="";
    }, 2000);
}
else
{
    surnameErrorMessage.innerHTML="";
    surnameMessage.innerHTML="thanks!";
    surnameMessage.style.cssText="background-image: url('./img/form-color2.png');";
    setTimeout(() => {
        surnameErrorMessage.innerHTML="";
    }, 2000);
}

if (error2==true){
    nameErrorMessage.innerHTML=message1;
    nameMessage.innerHTML="error";
    nameMessage.style.cssText="background-image: url('./img/form-orange.png');";
    setTimeout(() => {
        nameErrorMessage.innerHTML="";
    }, 2000);
}
else
{
    nameErrorMessage.innerHTML="";
    nameMessage.innerHTML="thanks!";
    nameMessage.style.cssText="background-image: url('./img/form-color2.png');";
    setTimeout(() => {
        nameErrorMessage.innerHTML="";
    }, 2000);
}

if (error3==true){
    patronymicErrorMessage.innerHTML=message1;
    patronymicMessage.innerHTML="error";
    patronymicMessage.style.cssText="background-image: url('./img/form-orange.png');";
    setTimeout(() => {
        patronymicErrorMessage.innerHTML="";
    }, 2000);
}
else
{
    patronymicErrorMessage.innerHTML="";
    patronymicMessage.innerHTML="thanks!";
    patronymicMessage.style.cssText="background-image: url('./img/form-color2.png');";
    setTimeout(() => {
        patronymicErrorMessage.innerHTML="";
    }, 2000);
}

if (error4==true){
    phoneErrorMessage.innerHTML=message1;
    phoneMessage.innerHTML="error";
    phoneMessage.style.cssText="background-image: url('./img/form-orange.png');";
    setTimeout(() => {
        phoneErrorMessage.innerHTML="";
    }, 2000);
}
else
{
    phoneErrorMessage.innerHTML="";
    phoneMessage.innerHTML="thanks!";
    phoneMessage.style.cssText="background-image: url('./img/form-color2.png');";
    setTimeout(() => {
        phoneErrorMessage.innerHTML="";
    }, 2000);
}

if (error5==true){
    emailErrorMessage.innerHTML=message1;
    emailMessage.innerHTML="error";
    emailMessage.style.cssText="background-image: url('./img/form-orange.png');";
    setTimeout(() => {
        emailErrorMessage.innerHTML="";
    }, 2000);
}
else
{
    emailErrorMessage.innerHTML="";
    emailMessage.innerHTML="thanks!";
    emailMessage.style.cssText="background-image: url('./img/form-color2.png');";
    setTimeout(() => {
        emailErrorMessage.innerHTML="";
    }, 2000);
}

if(fill1==false || fill2==false || fill3==false || fill4==false || fill5==false)
{
    completeForm.innerHTML = formNotComplete;
}
else
{
    completeForm.innerHTML = "";
}
}


