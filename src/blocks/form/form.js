let fillName = false;
let fillEmail = false;
let fillMessage = false;

let errorName = true;
let errorEmail = true;

const lengthMessage = 'This field should at least contain 3 characters.';
const emailMessage = 'This seems to be an invalid email.';
const formNotComplete = 'Form is not complete.';

class Form {
  constructor(root) {
    this.root = root;

    this.enableElements();
    this.enableFormNameInput();
    this.enableFormEmailInput();
    this.enableFormMessageInput();
    this.enableFormSubmitButton();
  }

  enableElements() {
    this.root.formNameInput = this.root.children[1].children[0];
    this.root.formNameMessageContainer = this.root.children[1].children[1];
    this.root.formNameInputErrorMessage = this.root.children[2];
    this.root.formEmailInput = this.root.children[3].children[0];
    this.root.formEmailMessageContainer = this.root.children[3].children[1];
    this.root.formEmailInputErrorMessage = this.root.children[4];
    this.root.formMessageInput = this.root.children[5].children[0];
    this.root.formSubmitButton = this.root.children[6].children[0];
    this.root.formCompleteform = this.root.children[0];
  }

  enableFormNameInput() {
    this.root.formNameInput.addEventListener('keyup', this.checkFormNameInput.bind(this));
  }

  enableFormEmailInput() {
    this.root.formEmailInput.addEventListener('keyup', this.checkFormEmailInput.bind(this));
  }

  enableFormMessageInput() {
    this.root.formMessageInput.addEventListener('keyup', this.checkFormMessageInput.bind(this));
  }

  enableFormSubmitButton() {
    this.root.formSubmitButton.addEventListener('click', this.submit.bind(this));
  }

  checkFormNameInput(element) {
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

  checkFormEmailInput(element) {
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

  checkFormMessageInput(element) {
    const usedInput = element.target;
    const inputValue = usedInput.value;

    if (inputValue.length > 0) {
      fillMessage = true;
    } else {
      fillMessage = false;
    }
  }

  submit() {

    if (errorName === true) {
      this.root.formNameInputErrorMessage.innerHTML = lengthMessage;
      this.root.formNameMessageContainer.innerHTML = 'ERROR';
      this.root.formNameMessageContainer.style.cssText = 'background-image: url(\'./src/blocks/form/images/form-orange.png\');';
      setTimeout(() => {
        this.root.formNameInputErrorMessage.innerHTML = '';
      }, 2000);
    } else {
      this.root.formNameInputErrorMessage.innerHTML = '';
      this.root.formNameMessageContainer.innerHTML = 'THANKS!';
      this.root.formNameMessageContainer.style.cssText = 'background-image: url(\'./src/blocks/form/images/form-color2.png\');';
      setTimeout(() => {
        this.root.formNameInputErrorMessage.innerHTML = '';
      }, 2000);
    }

    if (errorEmail === true) {
      this.root.formEmailInputErrorMessage.innerHTML = emailMessage;
      this.root.formEmailMessageContainer.innerHTML = 'ERROR';
      this.root.formEmailMessageContainer.style.cssText = 'background-image: url(\'./src/blocks/form/images/form-orange.png\');';
      setTimeout(() => {
        this.root.formEmailInputErrorMessage.innerHTML = '';
      }, 2000);
    } else {
      this.root.formEmailInputErrorMessage.innerHTML = '';
      this.root.formEmailMessageContainer.innerHTML = 'THANKS!';
      this.root.formEmailMessageContainer.style.cssText = 'background-image: url(\'./src/blocks/form/images/form-color2.png\');';
      setTimeout(() => {
        this.root.formEmailInputErrorMessage.innerHTML = '';
      }, 2000);
    }

    if (fillName === false || fillEmail === false || fillMessage === false) {
      this.root.formCompleteform.innerHTML = formNotComplete;
    } else {
      this.root.formCompleteform.innerHTML = '';
    }
  }
}


const root = document.getElementsByClassName('js-form');

for (let i = 0; i < root.length; i += 1) {
  new Form(root[i]);
}