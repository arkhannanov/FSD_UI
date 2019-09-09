let fillJob = false;
let fillFacebook = false;
let fillTwitter = false;
let fillDribbble = false;

let errorJob = true;
let errorFacebook = true;
let errorTwitter = true;
let errorDribbble = true;

const message = 'This field should at least contain 4 characters.';
const formNotComplete = 'Form is not complete.';

class FormJob {
  constructor(root) {
    this.root = root;

    this._startFormJob();
  }

  _startFormJob() {
    this._enableElements();
    this._enableJobTitleInput();
    this._enableFacebookInput();
    this._enableTwitterInput();
    this._enableDribbbleInput();
    this._enableSubmitButton();
  }

  _enableElements() {
    this.jobTitleInput = this.root.querySelector('.form-job__job-title-input');
    this.jobTitleInputMessageFilling = this.root.querySelectorAll('.form-job__job-title-input-message-filling');
    this.jobTitleInputMessageText = this.root.querySelector('.form-job__job-title-input-message-text');
    this.jobTitleErrorMessage = this.root.querySelector('.form-job__job-title-error-message');
    this.facebookInput = this.root.querySelector('.form-job__facebook-input');
    this.facebookInputMessageFilling = this.root.querySelectorAll('.form-job__facebook-input-message-filling');
    this.facebookInputMessageText = this.root.querySelector('.form-job__facebook-input-message-text');
    this.facebookErrorMessage = this.root.querySelector('.form-job__facebook-error-message');
    this.twitterInput = this.root.querySelector('.form-job__twitter-input');
    this.twitterInputMessageFilling = this.root.querySelectorAll('.form-job__twitter-input-message-filling');
    this.twitterInputMessageText = this.root.querySelector('.form-job__twitter-input-message-text');
    this.twitterErrorMessage = this.root.querySelector('.form-job__twitter-error-message');
    this.dribbbleInput = this.root.querySelector('.form-job__dribbble-input');
    this.dribbbleInputMessageFilling = this.root.querySelectorAll('.form-job__dribbble-input-message-filling');
    this.dribbbleInputMessageText = this.root.querySelector('.form-job__dribbble-input-message-text');
    this.dribbbleErrorMessage = this.root.querySelector('.form-job__dribbble-error-message');
    this.submitButton = this.root.querySelector('.form-job__submit-button');
    this.completeForm = this.root.querySelector('.form-job__completeform');

    this.jobTitleInputMessageFilling[0].style.cssText = 'display: none';
    this.jobTitleInputMessageFilling[1].style.cssText = 'display: none';
    this.facebookInputMessageFilling[0].style.cssText = 'display: none';
    this.facebookInputMessageFilling[1].style.cssText = 'display: none';
    this.twitterInputMessageFilling[0].style.cssText = 'display: none';
    this.twitterInputMessageFilling[1].style.cssText = 'display: none';
    this.dribbbleInputMessageFilling[0].style.cssText = 'display: none';
    this.dribbbleInputMessageFilling[1].style.cssText = 'display: none';
  }

  _enableJobTitleInput() {
    this.jobTitleInput.addEventListener('keyup', this._hadleJobTitleInputKeyUp.bind(this));
  }

  _enableFacebookInput() {
    this.facebookInput.addEventListener('keyup', this._handleFacebookInputKeyUp.bind(this));
  }

  _enableTwitterInput() {
    this.twitterInput.addEventListener('keyup', this._handleTwitterInputKeyUp.bind(this));
  }

  _enableDribbbleInput() {
    this.dribbbleInput.addEventListener('keyup', this._handleDribbbleInputKeyUp.bind(this));
  }

  _enableSubmitButton() {
    this.submitButton.addEventListener('click', this._handleSubmitButtonClick.bind(this));
  }

  _hadleJobTitleInputKeyUp(element) {
    const usedInput = element.target;
    const inputValue = usedInput.value;

    if (inputValue.length <= 3) {
      errorJob = true;
    } else {
      errorJob = false;
    }

    if (inputValue.length > 0) {
      fillJob = true;
    } else {
      fillJob = false;
    }
  }

  _handleFacebookInputKeyUp(element) {
    const usedInput = element.target;
    const inputValue = usedInput.value;

    if (inputValue.length <= 3) {
      errorFacebook = true;
    } else {
      errorFacebook = false;
    }

    if (inputValue.length > 0) {
      fillFacebook = true;
    } else {
      fillFacebook = false;
    }
  }

  _handleTwitterInputKeyUp(element) {
    const usedInput = element.target;
    const inputValue = usedInput.value;

    if (inputValue.length <= 3) {
      errorTwitter = true;
    } else {
      errorTwitter = false;
    }

    if (inputValue.length > 0) {
      fillTwitter = true;
    } else {
      fillTwitter = false;
    }
  }

  _handleDribbbleInputKeyUp(element) {
    const usedInput = element.target;
    const inputValue = usedInput.value;

    if (inputValue.length <= 3) {
      errorDribbble = true;
    } else {
      errorDribbble = false;
    }

    if (inputValue.length > 0) {
      fillDribbble = true;
    } else {
      fillDribbble = false;
    }
  }

  _handleSubmitButtonClick() {

    if (errorJob === true) {
      this.jobTitleErrorMessage.innerHTML = message;

      this.jobTitleInputMessageText.innerHTML = 'ERROR';
      this.jobTitleInputMessageFilling[0].style.cssText = 'border-right: 0.2rem solid #e75735; display:block';
      this.jobTitleInputMessageFilling[1].style.cssText = 'background: #e75735; display:block';

      setTimeout(() => {
        this.jobTitleErrorMessage.innerHTML = '';
      }, 2000);
    } else {
      this.jobTitleErrorMessage.innerHTML = '';
      this.jobTitleInputMessageText.innerHTML = 'THANKS';
      this.jobTitleInputMessageFilling[0].style.cssText = 'border-right: 0.2rem solid #4eb7a8; display:block';
      this.jobTitleInputMessageFilling[1].style.cssText = 'background: #4eb7a8; display:block';
      setTimeout(() => {
        this.jobTitleErrorMessage.innerHTML = '';
      }, 2000);
    }

    if (errorFacebook === true) {
      this.facebookErrorMessage.innerHTML = message;
      this.facebookInputMessageText.innerHTML = 'ERROR';
      this.facebookInputMessageFilling[0].style.cssText = 'border-right: 0.2rem solid #e75735; display:block';
      this.facebookInputMessageFilling[1].style.cssText = 'background: #e75735; display:block';
      setTimeout(() => {
        this.facebookErrorMessage.innerHTML = '';
      }, 2000);
    } else {
      this.facebookErrorMessage.innerHTML = '';
      this.facebookInputMessageText.innerHTML = 'THANKS';
      this.facebookInputMessageFilling[0].style.cssText = 'border-right: 0.2rem solid #4eb7a8; display:block';
      this.facebookInputMessageFilling[1].style.cssText = 'background: #4eb7a8; display:block';
      setTimeout(() => {
        this.facebookErrorMessage.innerHTML = '';
      }, 2000);
    }

    if (errorTwitter === true) {
      this.twitterErrorMessage.innerHTML = message;
      this.twitterInputMessageText.innerHTML = 'ERROR';
      this.twitterInputMessageFilling[0].style.cssText = 'border-right: 0.2rem solid #e75735; display:block';
      this.twitterInputMessageFilling[1].style.cssText = 'background: #e75735; display:block';
      setTimeout(() => {
        this.twitterErrorMessage.innerHTML = '';
      }, 2000);
    } else {
      this.twitterErrorMessage.innerHTML = '';
      this.twitterInputMessageText.innerHTML = 'THANKS';
      this.twitterInputMessageFilling[0].style.cssText = 'border-right: 0.2rem solid #4eb7a8; display:block';
      this.twitterInputMessageFilling[1].style.cssText = 'background: #4eb7a8; display:block';
      setTimeout(() => {
        this.twitterErrorMessage.innerHTML = '';
      }, 2000);
    }

    if (errorDribbble === true) {
      this.dribbbleErrorMessage.innerHTML = message;
      this.dribbbleInputMessageText.innerHTML = 'ERROR';
      this.dribbbleInputMessageFilling[0].style.cssText = 'border-right: 0.2rem solid #e75735; display:block';
      this.dribbbleInputMessageFilling[1].style.cssText = 'background: #e75735; display:block';
      setTimeout(() => {
        this.dribbbleErrorMessage.innerHTML = '';
      }, 2000);
    } else {
      this.dribbbleErrorMessage.innerHTML = '';
      this.dribbbleInputMessageText.innerHTML = 'THANKS';
      this.dribbbleInputMessageFilling[0].style.cssText = 'border-right: 0.2rem solid #4eb7a8; display:block';
      this.dribbbleInputMessageFilling[1].style.cssText = 'background: #4eb7a8; display:block';
      setTimeout(() => {
        this.dribbbleErrorMessage.innerHTML = '';
      }, 2000);
    }

    if (fillJob === false
      || fillFacebook === false
      || fillTwitter === false
      || fillDribbble === false) {
      this.completeForm.innerHTML = formNotComplete;
    } else {
      this.completeForm.innerHTML = '';
    }
  }
}

const root = document.getElementsByClassName('js-form-job');

Array.prototype.forEach.call(root, item => new FormJob(item));
