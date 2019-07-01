class DropDown {
    constructor(root) {
        this.korobkaContentline = root.korobkaContentline;
        this.mechanic = root.mechanic;
        this.automat = root.automat;
        this.placeContentline = root.placeContentline;
        this.office = root.office;
        this.phone = root.phone;
        this.enableMechanic();
        this.enableAutomat();
        this.enableOffice();
        this.enablePhone();
    }

    enableMechanic() {
        this.mechanic.addEventListener('click', this.checkMechanic.bind(this));
    }

    enableAutomat() {
        this.automat.addEventListener('click', this.checkAutomat.bind(this));
    }

    enableOffice() {
        this.office.addEventListener('click', this.checkOffice.bind(this));
    }

    enablePhone() {
        this.phone.addEventListener('click', this.checkPhone.bind(this));
    }

    checkMechanic() {
        this.korobkaContentline.innerHTML = 'Механика';
        this.korobkaContentline.style.backgroundColor = '#4eb7a8';
        this.korobkaContentline.style.color = 'white';
    }

    checkAutomat() {
        this.korobkaContentline.innerHTML = 'Автомат';
        this.korobkaContentline.style.backgroundColor = '#4eb7a8';
        this.korobkaContentline.style.color = 'white';
    }

    checkOffice() {
        this.placeContentline.innerHTML = 'В офисе';
        this.placeContentline.style.backgroundColor = '#4eb7a8';
        this.placeContentline.style.color = 'white';
    }

    checkPhone() {
        this.placeContentline.innerHTML = 'Ваш адрес (по телефону)';
        this.placeContentline.style.backgroundColor = '#4eb7a8';
        this.placeContentline.style.color = 'white';
    }
}
const root = {
    korobkaContentline: document.getElementById('drop-down-korobka__contentline'),
    mechanic: document.getElementById('drop-down-korobka__mechanic'),
    automat: document.getElementById('drop-down-korobka__automat'),
    placeContentline: document.getElementById('drop-down-place__contentline'),
    office: document.getElementById('drop-down-place__office'),
    phone: document.getElementById('drop-down-place__phone'),
};

new DropDown(root);
