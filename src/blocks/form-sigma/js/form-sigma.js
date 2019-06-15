var surnameInput = document.getElementById('form-sigma__surname-input');
var surnameMessage = document.getElementById('form-sigma__surname-message');
var surnameErrorMessage = document.getElementById('form-sigma__surname-error-message');

var nameInput = document.getElementById('form-sigma__name-input');
var nameMessage = document.getElementById('form-sigma__name-message');
var nameErrorMessage = document.getElementById('form-sigma__name-error-message');

var patronymicInput = document.getElementById('form-sigma__patronymic-input');
var patronymicMessage = document.getElementById('form-sigma__patronymic-message');
var patronymicErrorMessage = document.getElementById('form-sigma__patronymic-error-message');

var phoneInput = document.getElementById('form-sigma__phone-input');
var phoneMessage = document.getElementById('form-sigma__phone-message');
var phoneErrorMessage = document.getElementById('form-sigma__phone-error-message');

var emailInput = document.getElementById('form-sigma__email-input');
var emailMessage = document.getElementById('form-sigma__email-message');
var emailErrorMessage = document.getElementById('form-sigma__email-error-message');


var submitForm = document.getElementById('submit');
var completeForm = document.getElementById('completeform');

var fillSurname = false;
var fillName = false;
var fillPatronymic = false;
var fillPhone = false;
var fillEmail = false;

var errorSurname = true;
var errorName = true;
var errorPatronymic = true;
var errorPhone = true;
var errorEmail = true;

var message = "Должно быть по крайней мере 3 симовола.";
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
        errorSurname=true;
    }
    else
    {
        errorSurname=false;
    }

    if(inputValue.length>0)
    {
        fillSurname = true;
    }
    else
    {
        fillSurname = false; 
    }
}

function checkNameInput(e) {
    let usedInput = e.target;
    let inputValue = usedInput.value;

    if(inputValue.length <= 3){
        errorName=true;
    }
    else
    {
        errorName=false;
    }

    if(inputValue.length>0)
    {
        fillName = true;
    }
    else
    {
        fillName = false; 
    }
}

function checkPatronymicInput(e) {
    let usedInput = e.target;
    let inputValue = usedInput.value;

    if(inputValue.length <= 3){
        errorPatronymic=true;
    }
    else
    {
        errorPatronymic=false;
    }

    if(inputValue.length>0)
    {
        fillPatronymic = true;
    }
    else
    {
        fillPatronymic = false; 
    }
}

function checkPhoneInput(e) {
    let usedInput = e.target;
    let inputValue = usedInput.value;

    if(inputValue.length <= 3){
        errorPhone=true;
    }
    else
    {
        errorPhone=false;
    }

    if(inputValue.length>0)
    {
        fillPhone = true;
    }
    else
    {
        fillPhone = false; 
    }
}

function checkEmailInput(e) {
    let usedInput = e.target;
    let inputValue = usedInput.value;

    if(inputValue.length <= 3){
        errorEmail=true;
    }
    else
    {
        errorEmail=false;
    }

    if(inputValue.length>0)
    {
        fillEmail = true;
    }
    else
    {
        fillEmail = false; 
    }
}

function submit(){

if (errorSurname==true){
    surnameErrorMessage.innerHTML=message;
    surnameMessage.innerHTML="error";
    surnameMessage.style.cssText="background-image: url('./images/form-orange.png');";
    setTimeout(() => {
        surnameErrorMessage.innerHTML="";
    }, 2000);
}
else
{
    surnameErrorMessage.innerHTML="";
    surnameMessage.innerHTML="thanks!";
    surnameMessage.style.cssText="background-image: url('./images/form-color2.png');";
    setTimeout(() => {
        surnameErrorMessage.innerHTML="";
    }, 2000);
}

if (errorName==true){
    nameErrorMessage.innerHTML=message;
    nameMessage.innerHTML="error";
    nameMessage.style.cssText="background-image: url('./images/form-orange.png');";
    setTimeout(() => {
        nameErrorMessage.innerHTML="";
    }, 2000);
}
else
{
    nameErrorMessage.innerHTML="";
    nameMessage.innerHTML="thanks!";
    nameMessage.style.cssText="background-image: url('./images/form-color2.png');";
    setTimeout(() => {
        nameErrorMessage.innerHTML="";
    }, 2000);
}

if (errorPatronymic==true){
    patronymicErrorMessage.innerHTML=message;
    patronymicMessage.innerHTML="error";
    patronymicMessage.style.cssText="background-image: url('./images/form-orange.png');";
    setTimeout(() => {
        patronymicErrorMessage.innerHTML="";
    }, 2000);
}
else
{
    patronymicErrorMessage.innerHTML="";
    patronymicMessage.innerHTML="thanks!";
    patronymicMessage.style.cssText="background-image: url('./images/form-color2.png');";
    setTimeout(() => {
        patronymicErrorMessage.innerHTML="";
    }, 2000);
}

if (errorPhone==true){
    phoneErrorMessage.innerHTML=message;
    phoneMessage.innerHTML="error";
    phoneMessage.style.cssText="background-image: url('./images/form-orange.png');";
    setTimeout(() => {
        phoneErrorMessage.innerHTML="";
    }, 2000);
}
else
{
    phoneErrorMessage.innerHTML="";
    phoneMessage.innerHTML="thanks!";
    phoneMessage.style.cssText="background-image: url('./images/form-color2.png');";
    setTimeout(() => {
        phoneErrorMessage.innerHTML="";
    }, 2000);
}

if (errorEmail==true){
    emailErrorMessage.innerHTML=message;
    emailMessage.innerHTML="error";
    emailMessage.style.cssText="background-image: url('./images/form-orange.png');";
    setTimeout(() => {
        emailErrorMessage.innerHTML="";
    }, 2000);
}
else
{
    emailErrorMessage.innerHTML="";
    emailMessage.innerHTML="thanks!";
    emailMessage.style.cssText="background-image: url('./images/form-color2.png');";
    setTimeout(() => {
        emailErrorMessage.innerHTML="";
    }, 2000);
}

if(fillSurname==false || fillName==false || fillPatronymic==false || fillPhone==false || fillEmail==false)
{
    completeForm.innerHTML = formNotComplete;
}
else
{
    completeForm.innerHTML = "";
}
}

