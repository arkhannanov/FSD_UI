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

const message = 'Должно быть по крайней мере 3 симовола.';
const formNotComplete = 'Форма не закончена!';

class FormRentAuto {
  constructor(root) {
    this.surnameInput = root.surnameInput;
    this.surnameMessage = root.surnameMessage;
    this.surnameErrorMessage = root.surnameErrorMessage;
    this.nameInput = root.nameInput;
    this.nameMessage = root.nameMessage;
    this.nameErrorMessage = root.nameErrorMessage;
    this.patronymicInput = root.patronymicInput;
    this.patronymicMessage = root.patronymicMessage;
    this.patronymicErrorMessage = root.patronymicErrorMessage;
    this.phoneInput = root.phoneInput;
    this.phoneMessage = root.phoneMessage;
    this.phoneErrorMessage = root.phoneErrorMessage;
    this.emailInput = root.emailInput;
    this.emailMessage = root.emailMessage;
    this.emailErrorMessage = root.emailErrorMessage;
    this.submitForm = root.submitForm;
    this.completeForm = root.completeForm;
    this.enableSurnameInput();
    this.enableNameInput();
    this.enablePatronymicInput();
    this.enablePhoneInput();
    this.enableEmailInput();
    this.enableSubmitForm();
  }

  enableSurnameInput() {
    this.surnameInput.addEventListener('keyup', this.checkSurnameInput.bind(this));
  }

  enableNameInput() {
    this.nameInput.addEventListener('keyup', this.checkNameInput.bind(this));
  }

  enablePatronymicInput() {
    this.patronymicInput.addEventListener('keyup', this.checkPatronymicInput.bind(this));
  }

  enablePhoneInput() {
    this.phoneInput.addEventListener('keyup', this.checkPhoneInput.bind(this));
  }

  enableEmailInput() {
    this.emailInput.addEventListener('keyup', this.checkEmailInput.bind(this));
  }

  enableSubmitForm() {
    this.submitForm.addEventListener('click', this.submit.bind(this));
  }

  checkSurnameInput(element) {
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

  checkNameInput(element) {
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

  checkPatronymicInput(element) {
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

  checkPhoneInput(element) {
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

  checkEmailInput(element) {
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

  submit() {
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

const root = {
  surnameInput: document.getElementsByClassName('form-rent-auto__surname-input')[0],
  surnameMessage: document.getElementsByClassName('form-rent-auto__surname-message')[0],
  surnameErrorMessage: document.getElementsByClassName('form-rent-auto__surname-error-message')[0],
  nameInput: document.getElementsByClassName('form-rent-auto__name-input')[0],
  nameMessage: document.getElementsByClassName('form-rent-auto__name-message')[0],
  nameErrorMessage: document.getElementsByClassName('form-rent-auto__name-error-message')[0],
  patronymicInput: document.getElementsByClassName('form-rent-auto__patronymic-input')[0],
  patronymicMessage: document.getElementsByClassName('form-rent-auto__patronymic-message')[0],
  patronymicErrorMessage: document.getElementsByClassName('form-rent-auto__patronymic-error-message')[0],
  phoneInput: document.getElementsByClassName('form-rent-auto__phone-input')[0],
  phoneMessage: document.getElementsByClassName('form-rent-auto__phone-message')[0],
  phoneErrorMessage: document.getElementsByClassName('form-rent-auto__phone-error-message')[0],
  emailInput: document.getElementsByClassName('form-rent-auto__email-input')[0],
  emailMessage: document.getElementsByClassName('form-rent-auto__email-message')[0],
  emailErrorMessage: document.getElementsByClassName('form-rent-auto__email-error-message')[0],
  submitForm: document.getElementsByClassName('form-rent-auto-submit')[0],
  completeForm: document.getElementsByClassName('form-rent-auto-completeform')[0],
};

new FormRentAuto(root);
