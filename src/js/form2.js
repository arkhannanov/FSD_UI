var jobTitleInput = document.getElementById('form2__job-title-input');
var jobTitleMessage = document.getElementById('form2__job-title-message');
var jobTitleErrorMessage = document.getElementById('form2__job-title-error-message');

var facebookInput = document.getElementById('form2__facebook-input');
var facebookMessage = document.getElementById('form2__facebook-message');
var facebookErrorMessage = document.getElementById('form2__facebook-error-message');

var twitterInput = document.getElementById('form2__twitter-input');
var twitterMessage = document.getElementById('form2__twitter-message');
var twitterErrorMessage = document.getElementById('form2__twitter-error-message');

var dribbbleInput = document.getElementById('form2__dribbble-input');
var dribbbleMessage = document.getElementById('form2__dribbble-message');
var dribbbleErrorMessage = document.getElementById('form2__dribbble-error-message');


var submitButton = document.getElementById('form2__submit-button');
var completeForm = document.getElementById('form2__completeform');

var fill1 = false;
var fill2 = false;
var fill3 = false;
var fill4 = false;

var error1 = true;
var error2 = true;
var error3 = true;
var error4 = true;

var message1 = "This field should at least contain 3 characters.";
var formNotComplete = "Form is not complete.";

jobTitleInput.addEventListener('keyup', checkJobTitleInput);
facebookInput.addEventListener('keyup', checkFacebookInput);
twitterInput.addEventListener('keyup', checkTwitterInput);
dribbbleInput.addEventListener('keyup', checkDribbbleInput);

submitButton.addEventListener('click', submit);

function checkJobTitleInput(e) {
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

function checkFacebookInput(e) {
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

function checkTwitterInput(e) {
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

function checkDribbbleInput(e) {
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


function submit() {

if (error1==true){
    jobTitleErrorMessage.innerHTML = message1;
    jobTitleMessage.innerHTML = "error";
    jobTitleMessage.style.cssText = "background-image: url('./img/form-orange.png');";
    setTimeout(() => {
        jobTitleErrorMessage.innerHTML = "";
    }, 2000);
}
else
{
    jobTitleErrorMessage.innerHTML="";
    jobTitleMessage.innerHTML="thanks!";
    jobTitleMessage.style.cssText = "background-image: url('./img/form-color2.png');";
    setTimeout(() => {
        jobTitleErrorMessage.innerHTML = "";
    }, 2000);
}

if (error2==true){
    facebookErrorMessage.innerHTML= message1;
    facebookMessage.innerHTML = "error";
    facebookMessage.style.cssText = "background-image: url('./img/form-orange.png');";
    setTimeout(() => {
        facebookErrorMessage.innerHTML = "";
    }, 2000);
}
else
{
    facebookErrorMessage.innerHTML = "";
    facebookMessage.innerHTML = "thanks!";
    facebookMessage.style.cssText="background-image: url('./img/form-color2.png');";
    setTimeout(() => {
        facebookErrorMessage.innerHTML = "";
    }, 2000);
}

if (error3==true){
    twitterErrorMessage.innerHTML = message1;
    twitterMessage.innerHTML = "error";
    twitterMessage.style.cssText = "background-image: url('./img/form-orange.png');";
    setTimeout(() => {
        twitterErrorMessage.innerHTML = "";
    }, 2000);
}
else
{
    twitterErrorMessage.innerHTML = "";
    twitterMessage.innerHTML = "thanks!";
    twitterMessage.style.cssText = "background-image: url('./img/form-color2.png');";
    setTimeout(() => {
        twitterErrorMessage.innerHTML = "";
    }, 2000);
}

if (error4==true){
    dribbbleErrorMessage.innerHTML = message1;
    dribbbleMessage.innerHTML="error";
    dribbbleMessage.style.cssText = "background-image: url('./img/form-orange.png');";
    setTimeout(() => {
        dribbbleErrorMessage.innerHTML = "";
    }, 2000);
}
else
{
    dribbbleErrorMessage.innerHTML = "";
    dribbbleMessage.innerHTML = "thanks!";
    dribbbleMessage.style.cssText = "background-image: url('./img/form-color2.png');";
    setTimeout(() => {
        dribbbleErrorMessage.innerHTML = "";
    }, 2000);
}

if(fill1==false || fill2==false || fill3==false || fill4==false)
{
    completeForm.innerHTML = formNotComplete;
}
else
{
    completeForm.innerHTML = "";
}
}


