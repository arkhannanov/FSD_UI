let fillName = false;
let fillEmail = false;
let fillMessage = false;

let errorName = true;
let errorEmail = true;

const lengthMessage = 'This field should at least contain 4 characters.';
const emailMessage = 'This seems to be an invalid email.';
const formNotComplete = 'Form is not complete.';

class Form {
  constructor(root) {
    this.root = root;

    this._startForm();
  }

  _startForm() {
    this._enableElements();
    this._enableFormNameInput();
    this._enableFormEmailInput();
    this._enableFormMessageInput();
    this._enableFormSubmitButton();
  }

  _enableElements() {
    this.formNameInput = this.root.querySelector('.form__name-input');
    this.formNameInputMessageFilling = this.root.querySelectorAll('.form__name-input-message-filling');
    this.formNameInputMessageText = this.root.querySelector('.form__name-input-message-text');
    this.formNameInputErrorMessage = this.root.querySelector('.form__name-input-error-message');
    this.formEmailInput = this.root.querySelector('.form__email-input');
    this.formEmailInputMessageFilling = this.root.querySelectorAll('.form__email-input-message-filling');
    this.formEmailInputMessageText = this.root.querySelector('.form__email-input-message-text');
    this.formEmailInputErrorMessage = this.root.querySelector(' .form__email-input-error-message');
    this.formMessageInput = this.root.querySelector('.form__message-input');
    this.formSubmitButton = this.root.querySelector('.form__submit-button');
    this.formCompleteform = this.root.querySelector('.form__completeform');

  }

  _enableFormNameInput() {
    this.formNameInput.addEventListener('keyup', this._handleFormNameInputKeyUp.bind(this));
  }

  _enableFormEmailInput() {
    this.formEmailInput.addEventListener('keyup', this._handleFormEmailInputKeyUp.bind(this));
  }

  _enableFormMessageInput() {
    this.formMessageInput.addEventListener('keyup', this._handleFormMessageInputKeyUp.bind(this));
  }

  _enableFormSubmitButton() {
    this.formSubmitButton.addEventListener('click', this._handleFormSubmitButtonClick.bind(this));
  }

  _handleFormNameInputKeyUp(element) {
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

  _handleFormEmailInputKeyUp(element) {
    const usedInput = element.target;
    const inputValue = usedInput.value;

    if (!inputValue.includes('@') || !inputValue.includes('.')) {
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

  _handleFormMessageInputKeyUp(element) {
    const usedInput = element.target;
    const inputValue = usedInput.value;

    if (inputValue.length > 0) {
      fillMessage = true;
    } else {
      fillMessage = false;
    }
  }

  _handleFormSubmitButtonClick() {

    if (errorName === true) {
      this.formNameInputErrorMessage.innerHTML = lengthMessage;
      this.formNameInputMessageText.innerHTML = 'ERROR';
      this.formNameInputMessageFilling[0].style.borderRightColor = '#e75735';
      this.formNameInputMessageFilling[1].style.backgroundColor = '#e75735';

      setTimeout(() => {
        this.formNameInputErrorMessage.innerHTML = '';
      }, 2000);
    } else {
      this.formNameInputErrorMessage.innerHTML = '';
      this.formNameInputMessageText.innerHTML = 'THANKS!';

      this.formNameInputMessageFilling[0].style.borderRightColor = '#4eb7a8';
      this.formNameInputMessageFilling[1].style.backgroundColor = '#4eb7a8';

      setTimeout(() => {
        this.formNameInputErrorMessage.innerHTML = '';
      }, 2000);
    }

    if (errorEmail === true) {
      this.formEmailInputErrorMessage.innerHTML = emailMessage;
      this.formEmailInputMessageText.innerHTML = 'ERROR';
      this.formEmailInputMessageFilling[0].style.borderRightColor = '#e75735';
      this.formEmailInputMessageFilling[1].style.backgroundColor = '#e75735';

      setTimeout(() => {
        this.formEmailInputErrorMessage.innerHTML = '';
      }, 2000);
    } else {
      this.formEmailInputErrorMessage.innerHTML = '';
      this.formEmailInputMessageText.innerHTML = 'THANKS!';
      this.formEmailInputMessageFilling[0].style.borderRightColor = '#4eb7a8';
      this.formEmailInputMessageFilling[1].style.backgroundColor = '#4eb7a8';
      setTimeout(() => {
        this.formEmailInputErrorMessage.innerHTML = '';
      }, 2000);
    }

    if (fillName === false || fillEmail === false || fillMessage === false) {
      this.formCompleteform.innerHTML = formNotComplete;
    } else {
      this.formCompleteform.innerHTML = '';
    }
  }
}


const root = document.getElementsByClassName('js-form');

Array.prototype.forEach.call(root, item => new Form(item));
