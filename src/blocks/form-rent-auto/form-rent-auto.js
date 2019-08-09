let fillSurname = false;
let fillName = false;
let fillPatronymic = false;
let fillPhone = false;
let fillEmail = false;

let errorSurname = true;
let errorName = true;
let errorPatronymic = true;
let errorPhone = true;
let errorEmail = true;

const message = 'Должно быть по крайней мере 4 симовола.';
const formNotComplete = 'Форма не закончена!';

class FormRentAuto {
  constructor(root) {
    this.root = root;

    this.startFormRentAuto();
  }

  startFormRentAuto() {
    this.enableElements();
    this.enableSurnameInput();
    this.enableNameInput();
    this.enablePatronymicInput();
    this.enablePhoneInput();
    this.enableEmailInput();
    this.enableSubmitForm();
  }

  enableElements() {
    this.surnameInput = this.root.querySelector('.form-rent-auto__surname-input');
    this.surnameMessage = this.root.querySelector('.form-rent-auto__surname-message');
    this.surnameErrorMessage = this.root.querySelector('.form-rent-auto__surname-error-message');
    this.nameInput = this.root.querySelector('.form-rent-auto__name-input');
    this.nameMessage = this.root.querySelector('.form-rent-auto__name-message');
    this.nameErrorMessage = this.root.querySelector('.form-rent-auto__name-error-message');
    this.patronymicInput = this.root.querySelector('.form-rent-auto__patronymic-input');
    this.patronymicMessage = this.root.querySelector('.form-rent-auto__patronymic-message');
    this.patronymicErrorMessage = this.root.querySelector('.form-rent-auto__patronymic-error-message');
    this.phoneInput = this.root.querySelector('.form-rent-auto__phone-input');
    this.phoneMessage = this.root.querySelector('.form-rent-auto__phone-message');
    this.phoneErrorMessage = this.root.querySelector('.form-rent-auto__phone-error-message');
    this.emailInput = this.root.querySelector('.form-rent-auto__email-input');
    this.emailMessage = this.root.querySelector('.form-rent-auto__email-message');
    this.emailErrorMessage = this.root.querySelector('.form-rent-auto__email-error-message');
    this.submitForm = document.getElementsByClassName('js-form-rent-auto-submit')[0];
    this.completeForm = document.getElementsByClassName('js-page-rent-auto__form-rent-auto-completeform')[0];
  }

  enableSurnameInput() {
    this.surnameInput.addEventListener('keyup', this.handleSurnameInputKeyUp.bind(this));
  }

  enableNameInput() {
    this.nameInput.addEventListener('keyup', this.handleNameInputKeyUp.bind(this));
  }

  enablePatronymicInput() {
    this.patronymicInput.addEventListener('keyup', this.handlePatronymicInputKeyUp.bind(this));
  }

  enablePhoneInput() {
    this.phoneInput.addEventListener('keyup', this.handlePhoneInputKeyUp.bind(this));
  }

  enableEmailInput() {
    this.emailInput.addEventListener('keyup', this.handleEmailInputKeyUp.bind(this));
  }

  enableSubmitForm() {
    this.submitForm.addEventListener('click', this.handleSubmitFormClick.bind(this));
  }

  handleSurnameInputKeyUp(element) {
    const usedInput = element.target;
    const inputValue = usedInput.value;

    if (inputValue.length <= 3) {
      errorSurname = true;
    } else {
      errorSurname = false;
    }

    if (inputValue.length > 0) {
      fillSurname = true;
    } else {
      fillSurname = false;
    }
  }

  handleNameInputKeyUp(element) {
    const usedInput = element.target;
    const inputValue = usedInput.value;

    if (inputValue.length <= 3) {
      errorName = true;
    } else {
      errorName = false;
    }

    if (inputValue.length > 0) {
      fillName = true;
    } else {
      fillName = false;
    }
  }

  handlePatronymicInputKeyUp(element) {
    const usedInput = element.target;
    const inputValue = usedInput.value;

    if (inputValue.length <= 3) {
      errorPatronymic = true;
    } else {
      errorPatronymic = false;
    }

    if (inputValue.length > 0) {
      fillPatronymic = true;
    } else {
      fillPatronymic = false;
    }
  }

  handlePhoneInputKeyUp(element) {
    const usedInput = element.target;
    const inputValue = usedInput.value;

    if (inputValue.length <= 3) {
      errorPhone = true;
    } else {
      errorPhone = false;
    }

    if (inputValue.length > 0) {
      fillPhone = true;
    } else {
      fillPhone = false;
    }
  }

  handleEmailInputKeyUp(element) {
    const usedInput = element.target;
    const inputValue = usedInput.value;

    if (inputValue.length <= 3) {
      errorEmail = true;
    } else {
      errorEmail = false;
    }

    if (inputValue.length > 0) {
      fillEmail = true;
    } else {
      fillEmail = false;
    }
  }

  handleSubmitFormClick() {
    if (errorSurname === true) {
      this.surnameErrorMessage.innerHTML = message;
      this.surnameMessage.innerHTML = 'error';
      this.surnameMessage.style.cssText = 'background-image: url(\'./src/blocks/form-rent-auto/images/form-orange.png\');';
      setTimeout(() => {
        this.surnameErrorMessage.innerHTML = '';
      }, 2000);
    } else {
      this.surnameErrorMessage.innerHTML = '';
      this.surnameMessage.innerHTML = 'thanks!';
      this.surnameMessage.style.cssText = 'background-image: url(\'./src/blocks/form-rent-auto/images/form-color2.png\');';
      setTimeout(() => {
        this.surnameErrorMessage.innerHTML = '';
      }, 2000);
    }

    if (errorName === true) {
      this.nameErrorMessage.innerHTML = message;
      this.nameMessage.innerHTML = 'error';
      this.nameMessage.style.cssText = 'background-image: url(\'./src/blocks/form-rent-auto/images/form-orange.png\');';
      setTimeout(() => {
        this.nameErrorMessage.innerHTML = '';
      }, 2000);
    } else {
      this.nameErrorMessage.innerHTML = '';
      this.nameMessage.innerHTML = 'thanks!';
      this.nameMessage.style.cssText = 'background-image: url(\'./src/blocks/form-rent-auto/images/form-color2.png\');';
      setTimeout(() => {
        this.nameErrorMessage.innerHTML = '';
      }, 2000);
    }

    if (errorPatronymic === true) {
      this.patronymicErrorMessage.innerHTML = message;
      this.patronymicMessage.innerHTML = 'error';
      this.patronymicMessage.style.cssText = 'background-image: url(\'./src/blocks/form-rent-auto/images/form-orange.png\');';
      setTimeout(() => {
        this.patronymicErrorMessage.innerHTML = '';
      }, 2000);
    } else {
      this.patronymicErrorMessage.innerHTML = '';
      this.patronymicMessage.innerHTML = 'thanks!';
      this.patronymicMessage.style.cssText = 'background-image: url(\'./src/blocks/form-rent-auto/images/form-color2.png\');';
      setTimeout(() => {
        this.patronymicErrorMessage.innerHTML = '';
      }, 2000);
    }

    if (errorPhone === true) {
      this.phoneErrorMessage.innerHTML = message;
      this.phoneMessage.innerHTML = 'error';
      this.phoneMessage.style.cssText = 'background-image: url(\'./src/blocks/form-rent-auto/images/form-orange.png\');';
      setTimeout(() => {
        this.phoneErrorMessage.innerHTML = '';
      }, 2000);
    } else {
      this.phoneErrorMessage.innerHTML = '';
      this.phoneMessage.innerHTML = 'thanks!';
      this.phoneMessage.style.cssText = 'background-image: url(\'./src/blocks/form-rent-auto/images/form-color2.png\');';
      setTimeout(() => {
        this.phoneErrorMessage.innerHTML = '';
      }, 2000);
    }

    if (errorEmail === true) {
      this.emailErrorMessage.innerHTML = message;
      this.emailMessage.innerHTML = 'error';
      this.emailMessage.style.cssText = 'background-image: url(\'./src/blocks/form-rent-auto/images/form-orange.png\');';
      setTimeout(() => {
        this.emailErrorMessage.innerHTML = '';
      }, 2000);
    } else {
      this.emailErrorMessage.innerHTML = '';
      this.emailMessage.innerHTML = 'thanks!';
      this.emailMessage.style.cssText = 'background-image: url(\'./src/blocks/form-rent-auto/images/form-color2.png\');';
      setTimeout(() => {
        this.emailErrorMessage.innerHTML = '';
      }, 2000);
    }

    if (fillSurname === false
      || fillName === false
      || fillPatronymic === false
      || fillPhone === false
      || fillEmail === false) {
      this.completeForm.innerHTML = formNotComplete;
    } else {
      this.completeForm.innerHTML = '';
    }
  }
}

const root = document.getElementsByClassName('js-form-rent-auto');

for (let i = 0; i < root.length; i += 1) {
  new FormRentAuto(root[i]);
}
