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

    this.startFormJob();
  }

  startFormJob() {
    this.enableElements();
    this.enableJobTitleInput();
    this.enableFacebookInput();
    this.enableTwitterInput();
    this.enableDribbbleInput();
    this.enableSubmitButton();
  }

  enableElements() {
    this.jobTitleInput = this.root.querySelector('.form-job__job-title-input');
    this.jobTitleMessage = this.root.querySelector('.form-job__job-title-message');
    this.jobTitleErrorMessage = this.root.querySelector('.form-job__job-title-error-message');
    this.facebookInput = this.root.querySelector('.form-job__facebook-input');
    this.facebookMessage = this.root.querySelector('.form-job__facebook-message');
    this.facebookErrorMessage = this.root.querySelector('.form-job__facebook-error-message');
    this.twitterInput = this.root.querySelector('.form-job__twitter-input');
    this.twitterMessage = this.root.querySelector('.form-job__twitter-message');
    this.twitterErrorMessage = this.root.querySelector('.form-job__twitter-error-message');
    this.dribbbleInput = this.root.querySelector('.form-job__dribbble-input');
    this.dribbbleMessage = this.root.querySelector('.form-job__dribbble-message');
    this.dribbbleErrorMessage = this.root.querySelector('.form-job__dribbble-error-message');
    this.submitButton = this.root.querySelector('.form-job__submit-button');
    this.completeForm = this.root.querySelector('.form-job__completeform');
  }

  enableJobTitleInput() {
    this.jobTitleInput.addEventListener('keyup', this.hadleJobTitleInputKeyUp.bind(this));
  }

  enableFacebookInput() {
    this.facebookInput.addEventListener('keyup', this.handleFacebookInputKeyUp.bind(this));
  }

  enableTwitterInput() {
    this.twitterInput.addEventListener('keyup', this.handleTwitterInputKeyUp.bind(this));
  }

  enableDribbbleInput() {
    this.dribbbleInput.addEventListener('keyup', this.handleDribbbleInputKeyUp.bind(this));
  }

  enableSubmitButton() {
    this.submitButton.addEventListener('click', this.handleSubmitButtonClick.bind(this));
  }

  hadleJobTitleInputKeyUp(element) {
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

  handleFacebookInputKeyUp(element) {
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

  handleTwitterInputKeyUp(element) {
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

  handleDribbbleInputKeyUp(element) {
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

  handleSubmitButtonClick() {
    if (errorJob === true) {
      this.jobTitleErrorMessage.innerHTML = message;
      this.jobTitleMessage.innerHTML = 'error';
      this.jobTitleMessage.style.cssText = 'background-image: url(\'./src/blocks/form-job/images/form-orange.png\');';
      setTimeout(() => {
        this.jobTitleErrorMessage.innerHTML = '';
      }, 2000);
    } else {
      this.jobTitleErrorMessage.innerHTML = '';
      this.jobTitleMessage.innerHTML = 'thanks!';
      this.jobTitleMessage.style.cssText = 'background-image: url(\'./src/blocks/form-job/images/form-color2.png\');';
      setTimeout(() => {
        this.jobTitleErrorMessage.innerHTML = '';
      }, 2000);
    }

    if (errorFacebook === true) {
      this.facebookErrorMessage.innerHTML = message;
      this.facebookMessage.innerHTML = 'error';
      this.facebookMessage.style.cssText = 'background-image: url(\'./src/blocks/form-job/images/form-orange.png\');';
      setTimeout(() => {
        this.facebookErrorMessage.innerHTML = '';
      }, 2000);
    } else {
      this.facebookErrorMessage.innerHTML = '';
      this.facebookMessage.innerHTML = 'thanks!';
      this.facebookMessage.style.cssText = 'background-image: url(\'./src/blocks/form-job/images/form-color2.png\');';
      setTimeout(() => {
        this.facebookErrorMessage.innerHTML = '';
      }, 2000);
    }

    if (errorTwitter === true) {
      this.twitterErrorMessage.innerHTML = message;
      this.twitterMessage.innerHTML = 'error';
      this.twitterMessage.style.cssText = 'background-image: url(\'./src/blocks/form-job/images/form-orange.png\');';
      setTimeout(() => {
        this.twitterErrorMessage.innerHTML = '';
      }, 2000);
    } else {
      this.twitterErrorMessage.innerHTML = '';
      this.twitterMessage.innerHTML = 'thanks!';
      this.twitterMessage.style.cssText = 'background-image: url(\'./src/blocks/form-job/images/form-color2.png\');';
      setTimeout(() => {
        this.twitterErrorMessage.innerHTML = '';
      }, 2000);
    }

    if (errorDribbble === true) {
      this.dribbbleErrorMessage.innerHTML = message;
      this.dribbbleMessage.innerHTML = 'error';
      this.dribbbleMessage.style.cssText = 'background-image: url(\'./src/blocks/form-job/images/form-orange.png\');';
      setTimeout(() => {
        this.dribbbleErrorMessage.innerHTML = '';
      }, 2000);
    } else {
      this.dribbbleErrorMessage.innerHTML = '';
      this.dribbbleMessage.innerHTML = 'thanks!';
      this.dribbbleMessage.style.cssText = 'background-image: url(\'./src/blocks/form-job/images/form-color2.png\');';
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
