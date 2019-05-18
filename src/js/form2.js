var input1 = document.getElementById('input1');
var messagecontainer1 = document.getElementById('message-container1');
var input1_errorMessage = document.getElementById('input1_errorMessage');

var input2 = document.getElementById('input2');
var messagecontainer2 = document.getElementById('message-container2');
var input2_errorMessage = document.getElementById('input2_errorMessage');

var input3 = document.getElementById('input3');
var messagecontainer3 = document.getElementById('message-container3');
var input3_errorMessage = document.getElementById('input3_errorMessage');

var input4 = document.getElementById('input4');
var messagecontainer4 = document.getElementById('message-container4');
var input4_errorMessage = document.getElementById('input4_errorMessage');


var submitForm = document.getElementById('submit');
var completeForm = document.getElementById('completeForm');

var fill1 = false;
var fill2 = false;
var fill3 = false;
var fill4 = false;

var Error1 = true;
var Error2 = true;
var Error3 = true;
var Error4 = true;

var Message1 = "This field should at least contain 3 characters.";
var FormNotComplete = "Form is not complete.";

input1.addEventListener('keyup', checkInput1);
input2.addEventListener('keyup', checkInput2);
input3.addEventListener('keyup', checkInput3);
input4.addEventListener('keyup', checkInput4);

submitForm.addEventListener('click', submit);

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

    if(inputValue.length <= 3){
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

    if(inputValue.length <= 3){
        Error3=true;
    }
    else
    {
        Error3=false;
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

function checkInput4(e) {
    let usedInput = e.target;
    let inputValue = usedInput.value;

    if(inputValue.length <= 3){
        Error4=true;
    }
    else
    {
        Error4=false;
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

if (Error1==true){
    input1_errorMessage.innerHTML=Message1;
    messagecontainer1.innerHTML="ERROR";
    messagecontainer1.style.cssText="background-image: url('./img/form-orange.png');";
    setTimeout(() => {
        input1_errorMessage.innerHTML="";
    }, 2000);
}
else
{
    input1_errorMessage.innerHTML="";
    messagecontainer1.innerHTML="THANKS!";
    messagecontainer1.style.cssText="background-image: url('./img/form-color2.png');";
    setTimeout(() => {
        input1_errorMessage.innerHTML="";
    }, 2000);
}

if (Error2==true){
    input2_errorMessage.innerHTML=Message1;
    messagecontainer2.innerHTML="ERROR";
    messagecontainer2.style.cssText="background-image: url('./img/form-orange.png');";
    setTimeout(() => {
        input2_errorMessage.innerHTML="";
    }, 2000);
}
else
{
    input2_errorMessage.innerHTML="";
    messagecontainer2.innerHTML="THANKS!";
    messagecontainer2.style.cssText="background-image: url('./img/form-color2.png');";
    setTimeout(() => {
        input2_errorMessage.innerHTML="";
    }, 2000);
}

if (Error3==true){
    input3_errorMessage.innerHTML=Message1;
    messagecontainer3.innerHTML="ERROR";
    messagecontainer3.style.cssText="background-image: url('./img/form-orange.png');";
    setTimeout(() => {
        input3_errorMessage.innerHTML="";
    }, 2000);
}
else
{
    input3_errorMessage.innerHTML="";
    messagecontainer3.innerHTML="THANKS!";
    messagecontainer3.style.cssText="background-image: url('./img/form-color2.png');";
    setTimeout(() => {
        input3_errorMessage.innerHTML="";
    }, 2000);
}

if (Error4==true){
    input4_errorMessage.innerHTML=Message1;
    messagecontainer4.innerHTML="ERROR";
    messagecontainer4.style.cssText="background-image: url('./img/form-orange.png');";
    setTimeout(() => {
        input4_errorMessage.innerHTML="";
    }, 2000);
}
else
{
    input4_errorMessage.innerHTML="";
    messagecontainer4.innerHTML="THANKS!";
    messagecontainer4.style.cssText="background-image: url('./img/form-color2.png');";
    setTimeout(() => {
        input4_errorMessage.innerHTML="";
    }, 2000);
}

if(fill1==false || fill2==false || fill3==false || fill4==false)
{
    completeForm.innerHTML=FormNotComplete;
}
else
{
    completeForm.innerHTML="";
}
}


