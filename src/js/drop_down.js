var contentline1 = document.getElementById('contentline1');
var option11 = document.getElementById('option11');
var option12 = document.getElementById('option12');

var contentline2 = document.getElementById('contentline2');
var option21 = document.getElementById('option21');
var option22 = document.getElementById('option22');

option11.addEventListener('click', checkClick1);
option12.addEventListener('click', checkClick2);

option21.addEventListener('click', checkClick3);
option22.addEventListener('click', checkClick4);

function checkClick1(){
    contentline1.innerHTML="Механика";
    contentline1.style.backgroundColor="#4eb7a8";
    contentline1.style.color="white";
}

function checkClick2(){
    contentline1.innerHTML="Автомат";
    contentline1.style.backgroundColor="#4eb7a8";
    contentline1.style.color="white";
}

function checkClick3(){
    contentline2.innerHTML="В офисе";
    contentline2.style.backgroundColor="#4eb7a8";
    contentline2.style.color="white";
}

function checkClick4(){
    contentline2.innerHTML="Ваш адрес (по телефону)";
    contentline2.style.backgroundColor="#4eb7a8";
    contentline2.style.color="white";
}