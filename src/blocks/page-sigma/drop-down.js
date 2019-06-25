let korobkaContentline = document.getElementById('drop-down-korobka__contentline');
let mechanic = document.getElementById('drop-down-korobka__mechanic');
let automat = document.getElementById('drop-down-korobka__automat');

let placeContentline= document.getElementById('drop-down-place__contentline');
let office = document.getElementById('drop-down-place__office');
let phone = document.getElementById('drop-down-place__phone');

mechanic.addEventListener('click', checkMechanic);
automat.addEventListener('click', checkAutomat);

office.addEventListener('click', checkOffice);
phone.addEventListener('click', checkPhone);

function checkMechanic() {
    korobkaContentline.innerHTML="Механика";
    korobkaContentline.style.backgroundColor="#4eb7a8";
    korobkaContentline.style.color="white";
}

function checkAutomat() {
    korobkaContentline.innerHTML="Автомат";
    korobkaContentline.style.backgroundColor="#4eb7a8";
    korobkaContentline.style.color="white";
}

function checkOffice() {
    placeContentline.innerHTML="В офисе";
    placeContentline.style.backgroundColor="#4eb7a8";
    placeContentline.style.color="white";
}

function checkPhone() {
    placeContentline.innerHTML="Ваш адрес (по телефону)";
    placeContentline.style.backgroundColor="#4eb7a8";
    placeContentline.style.color="white";
}