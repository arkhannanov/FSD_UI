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

    this.startForm();
  }

  startForm() {
    this.enableElements();
    this.enableFormNameInput();
    this.enableFormEmailInput();
    this.enableFormMessageInput();
    this.enableFormSubmitButton();
  }

  enableElements() {
    this.formNameInput = this.root.querySelector('.form__name-input');
    this.formNameMessageContainer = this.root.querySelector('.form__name-message-container');
    this.formNameInputErrorMessage = this.root.querySelector('.form__name-input-error-message');
    this.formEmailInput = this.root.querySelector('.form__email-input');
    this.formEmailMessageContainer = this.root.querySelector('.form__email-message-container');
    this.formEmailInputErrorMessage = this.root.querySelector(' .form__email-input-error-message');
    this.formMessageInput = this.root.querySelector('.form__message-input');
    this.formSubmitButton = this.root.querySelector('.form__submit-button');
    this.formCompleteform = this.root.querySelector('.form__completeform');
  }

  enableFormNameInput() {
    this.formNameInput.addEventListener('keyup', this.handleFormNameInputKeyUp.bind(this));
  }

  enableFormEmailInput() {
    this.formEmailInput.addEventListener('keyup', this.handleFormEmailInputKeyUp.bind(this));
  }

  enableFormMessageInput() {
    this.formMessageInput.addEventListener('keyup', this.handleFormMessageInputKeyUp.bind(this));
  }

  enableFormSubmitButton() {
    this.formSubmitButton.addEventListener('click', this.handleFormSubmitButtonClick.bind(this));
  }

  handleFormNameInputKeyUp(element) {
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

  handleFormEmailInputKeyUp(element) {
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

  handleFormMessageInputKeyUp(element) {
    const usedInput = element.target;
    const inputValue = usedInput.value;

    if (inputValue.length > 0) {
      fillMessage = true;
    } else {
      fillMessage = false;
    }
  }

  handleFormSubmitButtonClick() {

    if (errorName === true) {
      this.formNameInputErrorMessage.innerHTML = lengthMessage;
      this.formNameMessageContainer.innerHTML = 'ERROR';
      this.formNameMessageContainer.style.cssText = 'background-image: url(\'./src/blocks/form/images/form-orange.png\');';
      setTimeout(() => {
        this.formNameInputErrorMessage.innerHTML = '';
      }, 2000);
    } else {
      this.formNameInputErrorMessage.innerHTML = '';
      this.formNameMessageContainer.innerHTML = 'THANKS!';
      this.formNameMessageContainer.style.cssText = 'background-image: url(\'./src/blocks/form/images/form-color2.png\');';
      setTimeout(() => {
        this.formNameInputErrorMessage.innerHTML = '';
      }, 2000);
    }

    if (errorEmail === true) {
      this.formEmailInputErrorMessage.innerHTML = emailMessage;
      this.formEmailMessageContainer.innerHTML = 'ERROR';
      this.formEmailMessageContainer.style.cssText = 'background-image: url(\'./src/blocks/form/images/form-orange.png\');';
      setTimeout(() => {
        this.formEmailInputErrorMessage.innerHTML = '';
      }, 2000);
    } else {
      this.formEmailInputErrorMessage.innerHTML = '';
      this.formEmailMessageContainer.innerHTML = 'THANKS!';
      this.formEmailMessageContainer.style.cssText = 'background-image: url(\'./src/blocks/form/images/form-color2.png\');';
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

for (let i = 0; i < root.length; i += 1) {
  new Form(root[i]);
}
