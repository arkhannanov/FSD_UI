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

    this._startFormRentAuto();
  }

  _startFormRentAuto() {
    this._enableElements();
    this._enableSurnameInput();
    this._enableNameInput();
    this._enablePatronymicInput();
    this._enablePhoneInput();
    this._enableEmailInput();
    this._enableSubmitForm();
  }

  _enableElements() {
    this.surnameInput = this.root.querySelector('.form-rent-auto__surname-input');
    this.surnameInputMessageFilling = this.root.querySelectorAll('.form-rent-auto__surname-input-message-filling');
    this.surnameInputMessageText = this.root.querySelector('.form-rent-auto__surname-input-message-text');
    this.surnameErrorMessage = this.root.querySelector('.form-rent-auto__surname-error-message');
    this.nameInput = this.root.querySelector('.form-rent-auto__name-input');
    this.nameInputMessageFilling = this.root.querySelectorAll('.form-rent-auto__name-input-message-filling');
    this.nameInputMessageText = this.root.querySelector('.form-rent-auto__name-input-message-text');
    this.nameErrorMessage = this.root.querySelector('.form-rent-auto__name-error-message');
    this.patronymicInput = this.root.querySelector('.form-rent-auto__patronymic-input');
    this.patronymicInputMessageFilling = this.root.querySelectorAll('.form-rent-auto__patronymic-input-message-filling');
    this.patronymicInputMessageText = this.root.querySelector('.form-rent-auto__patronymic-input-message-text');
    this.patronymicErrorMessage = this.root.querySelector('.form-rent-auto__patronymic-error-message');
    this.phoneInput = this.root.querySelector('.form-rent-auto__phone-input');
    this.phoneInputMessageFilling = this.root.querySelectorAll('.form-rent-auto__phone-input-message-filling');
    this.phoneInputMessageText = this.root.querySelector('.form-rent-auto__phone-input-message-text');
    this.phoneErrorMessage = this.root.querySelector('.form-rent-auto__phone-error-message');
    this.emailInput = this.root.querySelector('.form-rent-auto__email-input');
    this.emailInputMessageFilling = this.root.querySelectorAll('.form-rent-auto__email-input-message-filling');
    this.emailInputMessageText = this.root.querySelector('.form-rent-auto__email-input-message-text');
    this.emailErrorMessage = this.root.querySelector('.form-rent-auto__email-error-message');
    this.submitForm = document.getElementsByClassName('js-form-rent-auto-submit')[0];
    this.completeForm = document.getElementsByClassName('js-page-rent-auto__form-rent-auto-completeform')[0];

    this.surnameInputMessageFilling[0].style.cssText = 'display: none';
    this.surnameInputMessageFilling[1].style.cssText = 'display: none';
    this.nameInputMessageFilling[0].style.cssText = 'display: none';
    this.nameInputMessageFilling[1].style.cssText = 'display: none';
    this.patronymicInputMessageFilling[0].style.cssText = 'display: none';
    this.patronymicInputMessageFilling[1].style.cssText = 'display: none';
    this.phoneInputMessageFilling[0].style.cssText = 'display: none';
    this.phoneInputMessageFilling[1].style.cssText = 'display: none';
    this.emailInputMessageFilling[0].style.cssText = 'display: none';
    this.emailInputMessageFilling[1].style.cssText = 'display: none';
  }

  _enableSurnameInput() {
    this.surnameInput.addEventListener('keyup', this._handleSurnameInputKeyUp.bind(this));
  }

  _enableNameInput() {
    this.nameInput.addEventListener('keyup', this._handleNameInputKeyUp.bind(this));
  }

  _enablePatronymicInput() {
    this.patronymicInput.addEventListener('keyup', this._handlePatronymicInputKeyUp.bind(this));
  }

  _enablePhoneInput() {
    this.phoneInput.addEventListener('keyup', this._handlePhoneInputKeyUp.bind(this));
  }

  _enableEmailInput() {
    this.emailInput.addEventListener('keyup', this._handleEmailInputKeyUp.bind(this));
  }

  _enableSubmitForm() {
    this.submitForm.addEventListener('click', this._handleSubmitFormClick.bind(this));
  }

  _handleSurnameInputKeyUp(element) {
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

  _handleNameInputKeyUp(element) {
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

  _handlePatronymicInputKeyUp(element) {
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

  _handlePhoneInputKeyUp(element) {
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

  _handleEmailInputKeyUp(element) {
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

  _handleSubmitFormClick() {
    if (errorSurname === true) {
      this.surnameErrorMessage.innerHTML = message;
      this.surnameInputMessageText.innerHTML = 'ERROR';
      this.surnameInputMessageFilling[0].style.cssText = 'border-right: 0.2rem solid #e75735; display:block';
      this.surnameInputMessageFilling[1].style.cssText = 'background: #e75735; display:block';
      setTimeout(() => {
        this.surnameErrorMessage.innerHTML = '';
      }, 2000);
    } else {
      this.surnameErrorMessage.innerHTML = '';
      this.surnameInputMessageText.innerHTML = 'THANKS';
      this.surnameInputMessageFilling[0].style.cssText = 'border-right: 0.2rem solid #4eb7a8; display:block';
      this.surnameInputMessageFilling[1].style.cssText = 'background: #4eb7a8; display:block';
      setTimeout(() => {
        this.surnameErrorMessage.innerHTML = '';
      }, 2000);
    }

    if (errorName === true) {
      this.nameErrorMessage.innerHTML = message;
      this.nameInputMessageText.innerHTML = 'ERROR';
      this.nameInputMessageFilling[0].style.cssText = 'border-right: 0.2rem solid #e75735; display:block';
      this.nameInputMessageFilling[1].style.cssText = 'background: #e75735; display:block';
      setTimeout(() => {
        this.nameErrorMessage.innerHTML = '';
      }, 2000);
    } else {
      this.nameErrorMessage.innerHTML = '';
      this.nameInputMessageText.innerHTML = 'THANKS';
      this.nameInputMessageFilling[0].style.cssText = 'border-right: 0.2rem solid #4eb7a8; display:block';
      this.nameInputMessageFilling[1].style.cssText = 'background: #4eb7a8; display:block';
      setTimeout(() => {
        this.nameErrorMessage.innerHTML = '';
      }, 2000);
    }

    if (errorPatronymic === true) {
      this.patronymicErrorMessage.innerHTML = message;
      this.patronymicInputMessageText.innerHTML = 'ERROR';
      this.patronymicInputMessageFilling[0].style.cssText = 'border-right: 0.2rem solid #e75735; display:block';
      this.patronymicInputMessageFilling[1].style.cssText = 'background: #e75735; display:block';
      setTimeout(() => {
        this.patronymicErrorMessage.innerHTML = '';
      }, 2000);
    } else {
      this.patronymicErrorMessage.innerHTML = '';
      this.patronymicInputMessageText.innerHTML = 'THANKS';
      this.patronymicInputMessageFilling[0].style.cssText = 'border-right: 0.2rem solid #4eb7a8; display:block';
      this.patronymicInputMessageFilling[1].style.cssText = 'background: #4eb7a8; display:block';
      setTimeout(() => {
        this.patronymicErrorMessage.innerHTML = '';
      }, 2000);
    }

    if (errorPhone === true) {
      this.phoneErrorMessage.innerHTML = message;
      this.phoneInputMessageText.innerHTML = 'ERROR';
      this.phoneInputMessageFilling[0].style.cssText = 'border-right: 0.2rem solid #e75735; display:block';
      this.phoneInputMessageFilling[1].style.cssText = 'background: #e75735; display:block';
      setTimeout(() => {
        this.phoneErrorMessage.innerHTML = '';
      }, 2000);
    } else {
      this.phoneErrorMessage.innerHTML = '';
      this.phoneInputMessageText.innerHTML = 'THANKS';
      this.phoneInputMessageFilling[0].style.cssText = 'border-right: 0.2rem solid #4eb7a8; display:block';
      this.phoneInputMessageFilling[1].style.cssText = 'background: #4eb7a8; display:block';
      setTimeout(() => {
        this.phoneErrorMessage.innerHTML = '';
      }, 2000);
    }

    if (errorEmail === true) {
      this.emailErrorMessage.innerHTML = message;
      this.emailInputMessageText.innerHTML = 'ERROR';
      this.emailInputMessageFilling[0].style.cssText = 'border-right: 0.2rem solid #e75735; display:block';
      this.emailInputMessageFilling[1].style.cssText = 'background: #e75735; display:block';
      setTimeout(() => {
        this.emailErrorMessage.innerHTML = '';
      }, 2000);
    } else {
      this.emailErrorMessage.innerHTML = '';
      this.emailInputMessageText.innerHTML = 'THANKS';
      this.emailInputMessageFilling[0].style.cssText = 'border-right: 0.2rem solid #4eb7a8; display:block';
      this.emailInputMessageFilling[1].style.cssText = 'background: #4eb7a8; display:block';
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

Array.prototype.forEach.call(root, item => new FormRentAuto(item));