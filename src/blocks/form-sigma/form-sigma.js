let surnameInput = document.getElementById('form-sigma__surname-input');
let surnameMessage = document.getElementById('form-sigma__surname-message');
let surnameErrorMessage = document.getElementById('form-sigma__surname-error-message');

let nameInput = document.getElementById('form-sigma__name-input');
let nameMessage = document.getElementById('form-sigma__name-message');
let nameErrorMessage = document.getElementById('form-sigma__name-error-message');

let patronymicInput = document.getElementById('form-sigma__patronymic-input');
let patronymicMessage = document.getElementById('form-sigma__patronymic-message');
let patronymicErrorMessage = document.getElementById('form-sigma__patronymic-error-message');

let phoneInput = document.getElementById('form-sigma__phone-input');
let phoneMessage = document.getElementById('form-sigma__phone-message');
let phoneErrorMessage = document.getElementById('form-sigma__phone-error-message');

let emailInput = document.getElementById('form-sigma__email-input');
let emailMessage = document.getElementById('form-sigma__email-message');
let emailErrorMessage = document.getElementById('form-sigma__email-error-message');


let submitForm = document.getElementById('submit');
let completeForm = document.getElementById('completeform');

let fillSurname = false;
let fillName = false;
let fillPatronymic = false;
let fillPhone = false;
let fillEmail = false;

let errorSurname = true;
let errorName = true;
let errorPatronymic = true;
let errorPhone = true;
let errorEmail = true;

let message = "Должно быть по крайней мере 3 симовола.";
let formNotComplete = "Форма не закончена!"

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
    surnameMessage.style.cssText="background-image: url('./src/blocks/form-sigma/images/form-orange.png');";
    setTimeout(() => {
        surnameErrorMessage.innerHTML="";
    }, 2000);
}
else
{
    surnameErrorMessage.innerHTML="";
    surnameMessage.innerHTML="thanks!";
    surnameMessage.style.cssText="background-image: url('./src/blocks/form-sigma/images/form-color2.png');";
    setTimeout(() => {
        surnameErrorMessage.innerHTML="";
    }, 2000);
}

if (errorName==true){
    nameErrorMessage.innerHTML=message;
    nameMessage.innerHTML="error";
    nameMessage.style.cssText="background-image: url('./src/blocks/form-sigma/images/form-orange.png');";
    setTimeout(() => {
        nameErrorMessage.innerHTML="";
    }, 2000);
}
else
{
    nameErrorMessage.innerHTML="";
    nameMessage.innerHTML="thanks!";
    nameMessage.style.cssText="background-image: url('./src/blocks/form-sigma/images/form-color2.png');";
    setTimeout(() => {
        nameErrorMessage.innerHTML="";
    }, 2000);
}

if (errorPatronymic==true){
    patronymicErrorMessage.innerHTML=message;
    patronymicMessage.innerHTML="error";
    patronymicMessage.style.cssText="background-image: url('./src/blocks/form-sigma/images/form-orange.png');";
    setTimeout(() => {
        patronymicErrorMessage.innerHTML="";
    }, 2000);
}
else
{
    patronymicErrorMessage.innerHTML="";
    patronymicMessage.innerHTML="thanks!";
    patronymicMessage.style.cssText="background-image: url('./src/blocks/form-sigma/images/form-color2.png');";
    setTimeout(() => {
        patronymicErrorMessage.innerHTML="";
    }, 2000);
}

if (errorPhone==true){
    phoneErrorMessage.innerHTML=message;
    phoneMessage.innerHTML="error";
    phoneMessage.style.cssText="background-image: url('./src/blocks/form-sigma/images/form-orange.png');";
    setTimeout(() => {
        phoneErrorMessage.innerHTML="";
    }, 2000);
}
else
{
    phoneErrorMessage.innerHTML="";
    phoneMessage.innerHTML="thanks!";
    phoneMessage.style.cssText="background-image: url('./src/blocks/form-sigma/images/form-color2.png');";
    setTimeout(() => {
        phoneErrorMessage.innerHTML="";
    }, 2000);
}

if (errorEmail==true){
    emailErrorMessage.innerHTML=message;
    emailMessage.innerHTML="error";
    emailMessage.style.cssText="background-image: url('./src/blocks/form-sigma/images/form-orange.png');";
    setTimeout(() => {
        emailErrorMessage.innerHTML="";
    }, 2000);
}
else
{
    emailErrorMessage.innerHTML="";
    emailMessage.innerHTML="thanks!";
    emailMessage.style.cssText="background-image: url('./src/blocks/form-sigma/images/form-color2.png');";
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

