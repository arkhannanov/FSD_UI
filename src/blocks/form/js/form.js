var formNameInput = document.getElementById('form__name-input');
var formNameMessageContainer = document.getElementById('form__name-message-container');
var formNameInputerrormessage = document.getElementById('form__name-input-error-message');

var formEmailInput = document.getElementById('form__email-input');
var formEmailMessageContainer = document.getElementById('form__email-message-container');
var formEmailInputErrorMessage = document.getElementById('form__email-input-error-message');

var formMessageInput = document.getElementById('form__message-input');
var formSubmitButton = document.getElementById('form__submit-button');
var formCompleteform = document.getElementById('form__completeform');

var fillName = false;
var fillEmail = false;
var fillMessage = false;

var errorName = true;
var errorEmail = true;

var firstMessage = "This field should at least contain 3 characters.";
var secondMessage = "This seems to be an invalid email.";
var formNotComplete = "Form is not complete.";

formNameInput.addEventListener('keyup', checkFormNameInput);
formEmailInput.addEventListener('keyup', checkFormEmailInput);
formMessageInput.addEventListener('keyup', checkFormMessageInput);

formSubmitButton.addEventListener('click', submit);

function checkFormNameInput(e) {
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

function checkFormEmailInput(e) {
    let usedInput = e.target;
    let inputValue = usedInput.value;

    if(!inputValue.includes ('@') || !inputValue.includes ('.')){
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

function checkFormMessageInput(e) {
    let usedInput = e.target;
    let inputValue = usedInput.value;

    if(inputValue.length>0)
    {
        fillMessage = true;
    }
    else
    {
        fillMessage = false; 
    }
}

function submit(){

if (errorName==true){
    formNameInputerrormessage.innerHTML=firstMessage;
    formNameMessageContainer.innerHTML="ERROR";
    formNameMessageContainer.style.cssText="background-image: url('./images/form-orange.png');";
    setTimeout(() => {
        input1_errorMessage.innerHTML="";
    }, 2000);
}
else
{
    formNameInputerrormessage.innerHTML="";
    formNameMessageContainer.innerHTML="THANKS!";
    formNameMessageContainer.style.cssText="background-image: url('./images/form-color2.png');";
    setTimeout(() => {
        formNameInputerrormessage.innerHTML="";
    }, 2000);
}

if (errorEmail==true){
    formEmailInputErrorMessage.innerHTML=secondMessage;
    formEmailMessageContainer.innerHTML="ERROR";
    formEmailMessageContainer.style.cssText="background-image: url('./images/form-orange.png');";
    setTimeout(() => {
        formEmailInputErrorMessage.innerHTML="";
    }, 2000);
}
else
{
    formEmailInputErrorMessage.innerHTML="";
    formEmailMessageContainer.innerHTML="THANKS!";
    formEmailMessageContainer.style.cssText="background-image: url('./images/form-color2.png');";
    setTimeout(() => {
        formEmailInputErrorMessage.innerHTML="";
    }, 2000);
}

if(fillName==false || fillEmail==false || fillMessage==false)
{
    formCompleteform.innerHTML=formNotComplete;
}
else
{
    formCompleteform.innerHTML="";
}
}


