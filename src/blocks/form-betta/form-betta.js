let jobTitleInput = document.getElementById('form-betta__job-title-input');
let jobTitleMessage = document.getElementById('form-betta__job-title-message');
let jobTitleErrorMessage = document.getElementById('form-betta__job-title-error-message');

let facebookInput = document.getElementById('form-betta__facebook-input');
let facebookMessage = document.getElementById('form-betta__facebook-message');
let facebookErrorMessage = document.getElementById('form-betta__facebook-error-message');

let twitterInput = document.getElementById('form-betta__twitter-input');
let twitterMessage = document.getElementById('form-betta__twitter-message');
let twitterErrorMessage = document.getElementById('form-betta__twitter-error-message');

let dribbbleInput = document.getElementById('form-betta__dribbble-input');
let dribbbleMessage = document.getElementById('form-betta__dribbble-message');
let dribbbleErrorMessage = document.getElementById('form-betta__dribbble-error-message');


let submitButton = document.getElementById('form-betta__submit-button');
let completeForm = document.getElementById('form-betta__completeform');

let fillJob = false;
let fillFacebook = false;
let fillTwitter = false;
let fillDribbble = false;

let errorJob = true;
let errorFacebook = true;
let errorTwitter = true;
let errorDribbble = true;

let message = "This field should at least contain 3 characters.";
let formNotComplete = "Form is not complete.";

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
    jobTitleMessage.style.cssText = "background-image: url('./src/blocks/form-betta/images/form-orange.png');";
    setTimeout(() => {
        jobTitleErrorMessage.innerHTML = "";
    }, 2000);
}
else
{
    jobTitleErrorMessage.innerHTML="";
    jobTitleMessage.innerHTML="thanks!";
    jobTitleMessage.style.cssText = "background-image: url('./src/blocks/form-betta/images/form-color2.png');";
    setTimeout(() => {
        jobTitleErrorMessage.innerHTML = "";
    }, 2000);
}

if (errorFacebook==true){
    facebookErrorMessage.innerHTML= message;
    facebookMessage.innerHTML = "error";
    facebookMessage.style.cssText = "background-image: url('./src/blocks/form-betta/images/form-orange.png');";
    setTimeout(() => {
        facebookErrorMessage.innerHTML = "";
    }, 2000);
}
else
{
    facebookErrorMessage.innerHTML = "";
    facebookMessage.innerHTML = "thanks!";
    facebookMessage.style.cssText="background-image: url('./src/blocks/form-betta/images/form-color2.png');";
    setTimeout(() => {
        facebookErrorMessage.innerHTML = "";
    }, 2000);
}

if (errorTwitter==true){
    twitterErrorMessage.innerHTML = message;
    twitterMessage.innerHTML = "error";
    twitterMessage.style.cssText = "background-image: url('./src/blocks/form-betta/images/form-orange.png');";
    setTimeout(() => {
        twitterErrorMessage.innerHTML = "";
    }, 2000);
}
else
{
    twitterErrorMessage.innerHTML = "";
    twitterMessage.innerHTML = "thanks!";
    twitterMessage.style.cssText = "background-image: url('./src/blocks/form-betta/images/form-color2.png');";
    setTimeout(() => {
        twitterErrorMessage.innerHTML = "";
    }, 2000);
}

if (errorDribbble==true){
    dribbbleErrorMessage.innerHTML = message;
    dribbbleMessage.innerHTML="error";
    dribbbleMessage.style.cssText = "background-image: url('./src/blocks/form-betta/images/form-orange.png');";
    setTimeout(() => {
        dribbbleErrorMessage.innerHTML = "";
    }, 2000);
}
else
{
    dribbbleErrorMessage.innerHTML = "";
    dribbbleMessage.innerHTML = "thanks!";
    dribbbleMessage.style.cssText = "background-image: url('./src/blocks/form-betta/images/form-color2.png');";
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


