var input1 = document.getElementById('input1');
var messagecontainer1 = document.getElementById('message-container1');
var input1_errorMessage = document.getElementById('input1_errorMessage');
var input2 = document.getElementById('input2');
var messagecontainer2 = document.getElementById('message-container2');
var input2_errorMessage = document.getElementById('input2_errorMessage');
var input3 = document.getElementById('input3');
var submitForm = document.getElementById('submit');
var completeForm = document.getElementById('completeForm');

var fill1 = false;
var fill2 = false;
var fill3 = false;

var Error1 = true;
var Error2 = true;

var Message1 = "This field should at least contain 3 characters.";
var Message2 = "This seems to be an invalid email.";
var FormNotComplete = "Form is not complete.";

input1.addEventListener('keyup', checkInput1);
input2.addEventListener('keyup', checkInput2);
input3.addEventListener('keyup', checkInput3);

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

function checkInput3(e){
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
    input2_errorMessage.innerHTML=Message2;
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

if(fill1==false || fill2==false || fill3==false)
{
    completeForm.innerHTML=FormNotComplete;
    // console.log("Форма не закончена");
    // console.log(fill1);
    // console.log(fill2);
    // console.log(fill3);
    
}
else
{
    completeForm.innerHTML="";
    // console.log("Форма закончена"); 
    // console.log(fill1);
    // console.log(fill2);
    // console.log(fill3);
}

}


