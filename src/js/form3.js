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

var input5 = document.getElementById('input5');
var messagecontainer5 = document.getElementById('message-container5');
var input5_errorMessage = document.getElementById('input5_errorMessage');


var submitForm = document.getElementById('submit');
var completeForm = document.getElementById('completeForm');

var fill1 = false;
var fill2 = false;
var fill3 = false;
var fill4 = false;
var fill5 = false;

var Error1 = true;
var Error2 = true;
var Error3 = true;
var Error4 = true;
var Error5 = true;

var Message1 = "Должно быть по крайней мере 3 симовола.";
//var FormNotComplete = "Form is not complete.";

input1.addEventListener('keyup', checkInput1);
input2.addEventListener('keyup', checkInput2);
input3.addEventListener('keyup', checkInput3);
input4.addEventListener('keyup', checkInput4);
input5.addEventListener('keyup', checkInput5);

submitForm.addEventListener('click', submit);



function checkInput1(e){
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

function checkInput2(e){
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

function checkInput3(e){
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

function checkInput4(e){
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

function checkInput5(e){
    let usedInput = e.target;
    let inputValue = usedInput.value;

    if(inputValue.length <= 3){
        Error5=true;
    }
    else
    {
        Error5=false;
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

// if (Error1==undefined)
// {
//     input1_errorMessage.innerHTML="";
//     messagecontainer1.innerHTML="";
//     messagecontainer1.style.cssText="background-image: none;";
// }

if (Error1==true){
    input1_errorMessage.innerHTML=Message1;
    messagecontainer1.innerHTML="ERROR";
    messagecontainer1.style.cssText="background-image: url('./img/formOrange.png');";
    setTimeout(() => {
        input1_errorMessage.innerHTML="";
       // errMessageActive = false;
    }, 2000);
    // console.log ("Первая ошибка");
    // console.log (Error1);
}
else
{
    input1_errorMessage.innerHTML="";
    messagecontainer1.innerHTML="THANKS!";
    messagecontainer1.style.cssText="background-image: url('./img/formColor2.png');";
    setTimeout(() => {
        input1_errorMessage.innerHTML="";
       // errMessageActive = false;
    }, 2000);

     console.log ("Второй цвет фона");
}

if (Error2==true){
    input2_errorMessage.innerHTML=Message1;
    messagecontainer2.innerHTML="ERROR";
    messagecontainer2.style.cssText="background-image: url('./img/formOrange.png');";
    setTimeout(() => {
        input2_errorMessage.innerHTML="";
       // errMessageActive = false;
    }, 2000);
}
else
{
    input2_errorMessage.innerHTML="";
    messagecontainer2.innerHTML="THANKS!";
    messagecontainer2.style.cssText="background-image: url('./img/formColor2.png');";
    setTimeout(() => {
        input2_errorMessage.innerHTML="";
       // errMessageActive = false;
    }, 2000);
}

if (Error3==true){
    input3_errorMessage.innerHTML=Message1;
    messagecontainer3.innerHTML="ERROR";
    messagecontainer3.style.cssText="background-image: url('./img/formOrange.png');";
    setTimeout(() => {
        input3_errorMessage.innerHTML="";
       // errMessageActive = false;
    }, 2000);
}
else
{
    input3_errorMessage.innerHTML="";
    messagecontainer3.innerHTML="THANKS!";
    messagecontainer3.style.cssText="background-image: url('./img/formColor2.png');";
    setTimeout(() => {
        input3_errorMessage.innerHTML="";
       // errMessageActive = false;
    }, 2000);
}

if (Error4==true){
    input4_errorMessage.innerHTML=Message1;
    messagecontainer4.innerHTML="ERROR";
    messagecontainer4.style.cssText="background-image: url('./img/formOrange.png');";
    setTimeout(() => {
        input4_errorMessage.innerHTML="";
       // errMessageActive = false;
    }, 2000);
}
else
{
    input4_errorMessage.innerHTML="";
    messagecontainer4.innerHTML="THANKS!";
    messagecontainer4.style.cssText="background-image: url('./img/formColor2.png');";
    setTimeout(() => {
        input4_errorMessage.innerHTML="";
       // errMessageActive = false;
    }, 2000);
}

if (Error5==true){
    input5_errorMessage.innerHTML=Message1;
    messagecontainer5.innerHTML="ERROR";
    messagecontainer5.style.cssText="background-image: url('./img/formOrange.png');";
    setTimeout(() => {
        input5_errorMessage.innerHTML="";
       // errMessageActive = false;
    }, 2000);
}
else
{
    input5_errorMessage.innerHTML="";
    messagecontainer5.innerHTML="THANKS!";
    messagecontainer5.style.cssText="background-image: url('./img/formColor2.png');";
    setTimeout(() => {
        input5_errorMessage.innerHTML="";
       // errMessageActive = false;
    }, 2000);
}

// if(fill1==false || fill2==false || fill3==false || fill4==false)
// {
//     completeForm.innerHTML=FormNotComplete;
//     // console.log("Форма не закончена");
//     // console.log(fill1);
//     // console.log(fill2);
//     // console.log(fill3);
    
// }
// else
// {
//     completeForm.innerHTML="";
//     // console.log("Форма закончена"); 
//     // console.log(fill1);
//     // console.log(fill2);
//     // console.log(fill3);
// }

}


