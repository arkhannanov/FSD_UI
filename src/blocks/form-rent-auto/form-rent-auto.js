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
    this.root.surnameInput = this.root.children[0].children[0];
    this.root.surnameMessage = this.root.children[0].children[1];
    this.root.surnameErrorMessage = this.root.children[1];
    this.root.nameInput = this.root.children[2].children[0];
    this.root.nameMessage = this.root.children[2].children[1];
    this.root.nameErrorMessage = this.root.children[3];
    this.root.patronymicInput = this.root.children[4].children[0];
    this.root.patronymicMessage = this.root.children[4].children[1];
    this.root.patronymicErrorMessage = this.root.children[5];
    this.root.phoneInput = this.root.children[6].children[0];
    this.root.phoneMessage = this.root.children[6].children[1];
    this.root.phoneErrorMessage = this.root.children[7];
    this.root.emailInput = this.root.children[8].children[0];
    this.root.emailMessage = this.root.children[8].children[1];
    this.root.emailErrorMessage = this.root.children[9];
    this.root.submitForm = document.getElementsByClassName('js-form-rent-auto-submit')[0];
    this.root.completeForm = document.getElementsByClassName('js-page-rent-auto__form-rent-auto-completeform')[0];
  }

  enableSurnameInput() {
    this.root.surnameInput.addEventListener('keyup', this.handleSurnameInputKeyUp.bind(this));
  }

  enableNameInput() {
    this.root.nameInput.addEventListener('keyup', this.handleNameInputKeyUp.bind(this));
  }

  enablePatronymicInput() {
    this.root.patronymicInput.addEventListener('keyup', this.handlePatronymicInputKeyUp.bind(this));
  }

  enablePhoneInput() {
    this.root.phoneInput.addEventListener('keyup', this.handlePhoneInputKeyUp.bind(this));
  }

  enableEmailInput() {
    this.root.emailInput.addEventListener('keyup', this.handleEmailInputKeyUp.bind(this));
  }

  enableSubmitForm() {
    this.root.submitForm.addEventListener('click', this.handleSubmitFormClick.bind(this));
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
      this.root.surnameErrorMessage.innerHTML = message;
      this.root.surnameMessage.innerHTML = 'error';
      this.root.surnameMessage.style.cssText = 'background-image: url(\'./src/blocks/form-rent-auto/images/form-orange.png\');';
      setTimeout(() => {
        this.root.surnameErrorMessage.innerHTML = '';
      }, 2000);
    } else {
      this.root.surnameErrorMessage.innerHTML = '';
      this.root.surnameMessage.innerHTML = 'thanks!';
      this.root.surnameMessage.style.cssText = 'background-image: url(\'./src/blocks/form-rent-auto/images/form-color2.png\');';
      setTimeout(() => {
        this.root.surnameErrorMessage.innerHTML = '';
      }, 2000);
    }

    if (errorName === true) {
      this.root.nameErrorMessage.innerHTML = message;
      this.root.nameMessage.innerHTML = 'error';
      this.root.nameMessage.style.cssText = 'background-image: url(\'./src/blocks/form-rent-auto/images/form-orange.png\');';
      setTimeout(() => {
        this.root.nameErrorMessage.innerHTML = '';
      }, 2000);
    } else {
      this.root.nameErrorMessage.innerHTML = '';
      this.root.nameMessage.innerHTML = 'thanks!';
      this.root.nameMessage.style.cssText = 'background-image: url(\'./src/blocks/form-rent-auto/images/form-color2.png\');';
      setTimeout(() => {
        this.root.nameErrorMessage.innerHTML = '';
      }, 2000);
    }

    if (errorPatronymic === true) {
      this.root.patronymicErrorMessage.innerHTML = message;
      this.root.patronymicMessage.innerHTML = 'error';
      this.root.patronymicMessage.style.cssText = 'background-image: url(\'./src/blocks/form-rent-auto/images/form-orange.png\');';
      setTimeout(() => {
        this.root.patronymicErrorMessage.innerHTML = '';
      }, 2000);
    } else {
      this.root.patronymicErrorMessage.innerHTML = '';
      this.root.patronymicMessage.innerHTML = 'thanks!';
      this.root.patronymicMessage.style.cssText = 'background-image: url(\'./src/blocks/form-rent-auto/images/form-color2.png\');';
      setTimeout(() => {
        this.root.patronymicErrorMessage.innerHTML = '';
      }, 2000);
    }

    if (errorPhone === true) {
      this.root.phoneErrorMessage.innerHTML = message;
      this.root.phoneMessage.innerHTML = 'error';
      this.root.phoneMessage.style.cssText = 'background-image: url(\'./src/blocks/form-rent-auto/images/form-orange.png\');';
      setTimeout(() => {
        this.root.phoneErrorMessage.innerHTML = '';
      }, 2000);
    } else {
      this.root.phoneErrorMessage.innerHTML = '';
      this.root.phoneMessage.innerHTML = 'thanks!';
      this.root.phoneMessage.style.cssText = 'background-image: url(\'./src/blocks/form-rent-auto/images/form-color2.png\');';
      setTimeout(() => {
        this.root.phoneErrorMessage.innerHTML = '';
      }, 2000);
    }

    if (errorEmail === true) {
      this.root.emailErrorMessage.innerHTML = message;
      this.root.emailMessage.innerHTML = 'error';
      this.root.emailMessage.style.cssText = 'background-image: url(\'./src/blocks/form-rent-auto/images/form-orange.png\');';
      setTimeout(() => {
        this.root.emailErrorMessage.innerHTML = '';
      }, 2000);
    } else {
      this.root.emailErrorMessage.innerHTML = '';
      this.root.emailMessage.innerHTML = 'thanks!';
      this.root.emailMessage.style.cssText = 'background-image: url(\'./src/blocks/form-rent-auto/images/form-color2.png\');';
      setTimeout(() => {
        this.root.emailErrorMessage.innerHTML = '';
      }, 2000);
    }

    if (fillSurname === false
      || fillName === false
      || fillPatronymic === false
      || fillPhone === false
      || fillEmail === false) {
      this.root.completeForm.innerHTML = formNotComplete;
    } else {
      this.root.completeForm.innerHTML = '';
    }
  }
}

const root = document.getElementsByClassName('js-form-rent-auto');

for (let i = 0; i < root.length; i += 1) {
  new FormRentAuto(root[i]);
}
