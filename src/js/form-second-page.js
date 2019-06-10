var jobTitleInput = document.getElementById('form-second-page__job-title-input');
var jobTitleMessage = document.getElementById('form-second-page__job-title-message');
var jobTitleErrorMessage = document.getElementById('form-second-page__job-title-error-message');

var facebookInput = document.getElementById('form-second-page__facebook-input');
var facebookMessage = document.getElementById('form-second-page__facebook-message');
var facebookErrorMessage = document.getElementById('form-second-page__facebook-error-message');

var twitterInput = document.getElementById('form-second-page__twitter-input');
var twitterMessage = document.getElementById('form-second-page__twitter-message');
var twitterErrorMessage = document.getElementById('form-second-page__twitter-error-message');

var dribbbleInput = document.getElementById('form-second-page__dribbble-input');
var dribbbleMessage = document.getElementById('form-second-page__dribbble-message');
var dribbbleErrorMessage = document.getElementById('form-second-page__dribbble-error-message');


var submitButton = document.getElementById('form-second-page__submit-button');
var completeForm = document.getElementById('form-second-page__completeform');

var fillJob = false;
var fillFacebook = false;
var fillTwitter = false;
var fillDribbble = false;

var errorJob = true;
var errorFacebook = true;
var errorTwitter = true;
var errorDribbble = true;

var message = "This field should at least contain 3 characters.";
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
        errorJob=true;
    }
    else
    {
        errorJob=false;
    }

    if(inputValue.length>0)
    {
        fillJob = true;
    }
    else
    {
        fillJob = false; 
    }

}

function checkFacebookInput(e) {
    let usedInput = e.target;
    let inputValue = usedInput.value;

    if(inputValue.length <= 3){
        errorFacebook=true;
    }
    else
    {
        errorFacebook=false;
    }

    if(inputValue.length>0)
    {
        fillFacebook = true;
    }
    else
    {
        fillFacebook = false; 
    }

}

function checkTwitterInput(e) {
    let usedInput = e.target;
    let inputValue = usedInput.value;

    if(inputValue.length <= 3){
        errorTwitter=true;
    }
    else
    {
        errorTwitter=false;
    }

    if(inputValue.length>0)
    {
        fillTwitter = true;
    }
    else
    {
        fillTwitter = false; 
    }

}

function checkDribbbleInput(e) {
    let usedInput = e.target;
    let inputValue = usedInput.value;

    if(inputValue.length <= 3){
        errorDribbble=true;
    }
    else
    {
        errorDribbble=false;
    }

    if(inputValue.length>0)
    {
        fillDribbble = true;
    }
    else
    {
        fillDribbble = false; 
    }

}


function submit() {

if (errorJob==true){
    jobTitleErrorMessage.innerHTML = message;
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

if (errorFacebook==true){
    facebookErrorMessage.innerHTML= message;
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

if (errorTwitter==true){
    twitterErrorMessage.innerHTML = message;
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

if (errorDribbble==true){
    dribbbleErrorMessage.innerHTML = message;
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

if(fillJob==false || fillFacebook==false || fillTwitter==false || fillDribbble==false)
{
    completeForm.innerHTML = formNotComplete;
}
else
{
    completeForm.innerHTML = "";
}
}


