let fillName = false;
let fillEmail = false;
let fillMessage = false;

let errorName = true;
let errorEmail = true;

const firstMessage = 'This field should at least contain 3 characters.';
const secondMessage = 'This seems to be an invalid email.';
const formNotComplete = 'Form is not complete.';

class Form {
    constructor(root) {
        this.formNameInput = root.formNameInput;
        this.formNameMessageContainer = root.formNameMessageContainer;
        this.formNameInputErrorMessage = root.formNameInputErrorMessage;
        this.formEmailInput = root.formEmailInput;
        this.formEmailMessageContainer = root.formEmailMessageContainer;
        this.formEmailInputErrorMessage = root.formEmailInputErrorMessage;
        this.formMessageInput = root.formMessageInput;
        this.formSubmitButton = root.formSubmitButton;
        this.formCompleteform = root.formCompleteform;
        this.enableFormNameInput();
        this.enableFormEmailInput();
        this.enableFormMessageInput();
        this.enableFormSubmitButton();
    }

    enableFormNameInput() {
        this.formNameInput.addEventListener('keyup', this.checkFormNameInput.bind(this));
    }

    enableFormEmailInput() {
        this.formEmailInput.addEventListener('keyup', this.checkFormEmailInput.bind(this));
    }

    enableFormMessageInput() {
        this.formMessageInput.addEventListener('keyup', this.checkFormMessageInput.bind(this));
    }

    enableFormSubmitButton() {
        this.formSubmitButton.addEventListener('click', this.submit.bind(this));
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
            this.formNameInputErrorMessage.innerHTML = firstMessage;
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
            this.formEmailInputErrorMessage.innerHTML = secondMessage;
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


const root = {
    formNameInput: document.getElementById('form__name-input'),
    formNameMessageContainer: document.getElementById('form__name-message-container'),
    formNameInputErrorMessage: document.getElementById('form__name-input-error-message'),
    formEmailInput: document.getElementById('form__email-input'),
    formEmailMessageContainer: document.getElementById('form__email-message-container'),
    formEmailInputErrorMessage: document.getElementById('form__email-input-error-message'),
    formMessageInput: document.getElementById('form__message-input'),
    formSubmitButton: document.getElementById('form__submit-button'),
    formCompleteform: document.getElementById('form__completeform'),
};

new Form(root);