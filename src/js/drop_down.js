var contentline1 = document.getElementById('drop-down1__contentline');
var dropDown1Option1 = document.getElementById('drop-down1__option1');
var dropDown1Option2 = document.getElementById('drop-down1__option2');

var contentline2 = document.getElementById('drop-down2__contentline');
var dropDown2Option1 = document.getElementById('drop-down2__option1');
var dropDown2Option1 = document.getElementById('drop-down2__option2');

dropDown1Option1.addEventListener('click', checkClick1);
dropDown1Option2.addEventListener('click', checkClick2);

dropDown2Option1.addEventListener('click', checkClick3);
dropDown2Option1.addEventListener('click', checkClick4);

function checkClick1() {
    contentline1.innerHTML="Механика";
    contentline1.style.backgroundColor="#4eb7a8";
    contentline1.style.color="white";
}

function checkClick2() {
    contentline1.innerHTML="Автомат";
    contentline1.style.backgroundColor="#4eb7a8";
    contentline1.style.color="white";
}

function checkClick3() {
    contentline2.innerHTML="В офисе";
    contentline2.style.backgroundColor="#4eb7a8";
    contentline2.style.color="white";
}

function checkClick4() {
    contentline2.innerHTML="Ваш адрес (по телефону)";
    contentline2.style.backgroundColor="#4eb7a8";
    contentline2.style.color="white";
}