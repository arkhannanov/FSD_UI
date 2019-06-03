var formNameInput = document.getElementById('form__name-input');
var formNameMessageContainer = document.getElementById('form__name-message-container');
var formNameInputerrormessage = document.getElementById('form__name-input-error-message');
var formEmailInput = document.getElementById('form__email-input');
var formEmailMessageContainer = document.getElementById('form__email-message-container');
var formEmailInputErrorMessage = document.getElementById('form__email-input-error-message');
var formMessageInput = document.getElementById('form__message-input');
var formSubmitButton = document.getElementById('form__submit-button');
var formConmpleform = document.getElementById('form__completeform');

var fill1 = false;
var fill2 = false;
var fill3 = false;

var Error1 = true;
var Error2 = true;

var Message1 = "This field should at least contain 3 characters.";
var Message2 = "This seems to be an invalid email.";
var FormNotComplete = "Form is not complete.";

formNameInput.addEventListener('keyup', checkInput1);
formEmailInput.addEventListener('keyup', checkInput2);
formMessageInput.addEventListener('keyup', checkInput3);

formSubmitButton.addEventListener('click', submit);

function checkInput1(e) {
    let usedInput = e.target;
    let inputValue = usedInput.value;

    if(inputValue.length <= 3){
        Error1=true;
    }
    else
    {
        Error1=false;
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

function checkInput2(e) {
    let usedInput = e.target;
    let inputValue = usedInput.value;

    if(!inputValue.includes ('@') || !inputValue.includes ('.')){
        Error2=true;
    }
    else
    {
        Error2=false;
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

function checkInput3(e) {
    let usedInput = e.target;
    let inputValue = usedInput.value;

    if(inputValue.length>0)
    {
        fill3 = true;
    }
    else
    {
        fill3 = false; 
    }
}

function submit(){

if (Error1==true){
    formNameInputerrormessage.innerHTML=Message1;
    formNameMessageContainer.innerHTML="ERROR";
    formNameMessageContainer.style.cssText="background-image: url('./img/form-orange.png');";
    setTimeout(() => {
        input1_errorMessage.innerHTML="";
    }, 2000);
}
else
{
    formNameInputerrormessage.innerHTML="";
    formNameMessageContainer.innerHTML="THANKS!";
    formNameMessageContainer.style.cssText="background-image: url('./img/form-color2.png');";
    setTimeout(() => {
        formNameInputerrormessage.innerHTML="";
    }, 2000);
}

if (Error2==true){
    formEmailInputErrorMessage.innerHTML=Message2;
    formEmailMessageContainer.innerHTML="ERROR";
    formEmailMessageContainer.style.cssText="background-image: url('./img/form-orange.png');";
    setTimeout(() => {
        input2_errorMessage.innerHTML="";
    }, 2000);
}
else
{
    formEmailInputErrorMessage.innerHTML="";
    formEmailMessageContainer.innerHTML="THANKS!";
    formEmailMessageContainer.style.cssText="background-image: url('./img/form-color2.png');";
    setTimeout(() => {
        formEmailInputErrorMessage.innerHTML="";
    }, 2000);
}

if(fill1==false || fill2==false || fill3==false)
{
    formConmpleform.innerHTML=FormNotComplete;
}
else
{
    formConmpleform.innerHTML="";
}
}


