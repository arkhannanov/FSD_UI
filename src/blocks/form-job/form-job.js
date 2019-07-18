let fillJob = false;
let fillFacebook = false;
let fillTwitter = false;
let fillDribbble = false;

let errorJob = true;
let errorFacebook = true;
let errorTwitter = true;
let errorDribbble = true;

const message = 'This field should at least contain 3 characters.';
const formNotComplete = 'Form is not complete.';

class FormJob {
  constructor(root) {
    this.jobTitleInput = root.jobTitleInput;
    this.jobTitleMessage = root.jobTitleMessage;
    this.jobTitleErrorMessage = root.jobTitleErrorMessage;
    this.facebookInput = root.facebookInput;
    this.facebookMessage = root.facebookMessage;
    this.facebookErrorMessage = root.facebookErrorMessage;
    this.twitterInput = root.twitterInput;
    this.twitterMessage = root.twitterMessage;
    this.twitterErrorMessage = root.twitterErrorMessage;
    this.dribbbleInput = root.dribbbleInput;
    this.dribbbleMessage = root.dribbbleMessage;
    this.dribbbleErrorMessage = root.dribbbleErrorMessage;
    this.submitButton = root.submitButton;
    this.completeForm = root.completeForm;
    this.enableJobTitleInput();
    this.enableFacebookInput();
    this.enableTwitterInput();
    this.enableDribbbleInput();
    this.enableSubmitButton();
  }

  enableJobTitleInput() {
    this.jobTitleInput.addEventListener('keyup', this.checkJobTitleInput.bind(this));
  }

  enableFacebookInput() {
    this.facebookInput.addEventListener('keyup', this.checkFacebookInput.bind(this));
  }

  enableTwitterInput() {
    this.twitterInput.addEventListener('keyup', this.checkTwitterInput.bind(this));
  }

  enableDribbbleInput() {
    this.dribbbleInput.addEventListener('keyup', this.checkDribbbleInput.bind(this));
  }

  enableSubmitButton() {
    this.submitButton.addEventListener('click', this.submit.bind(this));
  }

  checkJobTitleInput(element) {
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

  checkFacebookInput(element) {
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

  checkTwitterInput(element) {
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

  checkDribbbleInput(element) {
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

  submit() {
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

const root = {
  jobTitleInput: document.getElementsByClassName('form-job__job-title-input')[0],
  jobTitleMessage: document.getElementsByClassName('form-job__job-title-message')[0],
  jobTitleErrorMessage: document.getElementsByClassName('form-job__job-title-error-message')[0],
  facebookInput: document.getElementsByClassName('form-job__facebook-input')[0],
  facebookMessage: document.getElementsByClassName('form-job__facebook-message')[0],
  facebookErrorMessage: document.getElementsByClassName('form-job__facebook-error-message')[0],
  twitterInput: document.getElementsByClassName('form-job__twitter-input')[0],
  twitterMessage: document.getElementsByClassName('form-job__twitter-message')[0],
  twitterErrorMessage: document.getElementsByClassName('form-job__twitter-error-message')[0],
  dribbbleInput: document.getElementsByClassName('form-job__dribbble-input')[0],
  dribbbleMessage: document.getElementsByClassName('form-job__dribbble-message')[0],
  dribbbleErrorMessage: document.getElementsByClassName('form-job__dribbble-error-message')[0],
  submitButton: document.getElementsByClassName('form-job__submit-button')[0],
  completeForm: document.getElementsByClassName('form-job__completeform')[0],
};

if (typeof root.jobTitleInput !== 'undefined') {
  new FormJob(root);
}
