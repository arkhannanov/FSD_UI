class DropDown {
  constructor(root) {
    this.boxContentline = root.boxContentline;
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
    this.boxContentline.innerHTML = 'Механика';
    this.boxContentline.style.backgroundColor = '#4eb7a8';
    this.boxContentline.style.color = 'white';
  }

  checkAutomat() {
    this.boxContentline.innerHTML = 'Автомат';
    this.boxContentline.style.backgroundColor = '#4eb7a8';
    this.boxContentline.style.color = 'white';
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
  boxContentline: document.getElementsByClassName('page-rent-auto__drop-down-box-contentline')[0],
  mechanic: document.getElementsByClassName('page-rent-auto__drop-down-box-mechanic')[0],
  automat: document.getElementsByClassName('page-rent-auto__drop-down-box-automat')[0],
  placeContentline: document.getElementsByClassName('page-rent-auto__drop-down-place-contentline')[0],
  office: document.getElementsByClassName('page-rent-auto__drop-down-place-office')[0],
  phone: document.getElementsByClassName('page-rent-auto__drop-down-place-phone')[0],
};

new DropDown(root);
