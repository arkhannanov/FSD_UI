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
    this.root.jobTitleInput = this.root.children[1].children[0];
    this.root.jobTitleMessage = this.root.children[1].children[1];
    this.root.jobTitleErrorMessage = this.root.children[2];
    this.root.facebookInput = this.root.children[3].children[0];
    this.root.facebookMessage = this.root.children[3].children[1];
    this.root.facebookErrorMessage = this.root.children[4];
    this.root.twitterInput = this.root.children[5].children[0];
    this.root.twitterMessage = this.root.children[5].children[1];
    this.root.twitterErrorMessage = this.root.children[6];
    this.root.dribbbleInput = this.root.children[7].children[0];
    this.root.dribbbleMessage = this.root.children[7].children[1];
    this.root.dribbbleErrorMessage = this.root.children[8];
    this.root.submitButton = this.root.children[10].children[0];
    this.root.completeForm = this.root.children[0];
  }

  enableJobTitleInput() {
    this.root.jobTitleInput.addEventListener('keyup', this.hadleJobTitleInputKeyUp.bind(this));
  }

  enableFacebookInput() {
    this.root.facebookInput.addEventListener('keyup', this.handleFacebookInputKeyUp.bind(this));
  }

  enableTwitterInput() {
    this.root.twitterInput.addEventListener('keyup', this.handleTwitterInputKeyUp.bind(this));
  }

  enableDribbbleInput() {
    this.root.dribbbleInput.addEventListener('keyup', this.handleDribbbleInputKeyUp.bind(this));
  }

  enableSubmitButton() {
    this.root.submitButton.addEventListener('click', this.handleSubmitClick.bind(this));
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

  handleSubmitClick() {
    if (errorJob === true) {
      this.root.jobTitleErrorMessage.innerHTML = message;
      this.root.jobTitleMessage.innerHTML = 'error';
      this.root.jobTitleMessage.style.cssText = 'background-image: url(\'./src/blocks/form-job/images/form-orange.png\');';
      setTimeout(() => {
        this.root.jobTitleErrorMessage.innerHTML = '';
      }, 2000);
    } else {
      this.root.jobTitleErrorMessage.innerHTML = '';
      this.root.jobTitleMessage.innerHTML = 'thanks!';
      this.root.jobTitleMessage.style.cssText = 'background-image: url(\'./src/blocks/form-job/images/form-color2.png\');';
      setTimeout(() => {
        this.root.jobTitleErrorMessage.innerHTML = '';
      }, 2000);
    }

    if (errorFacebook === true) {
      this.root.facebookErrorMessage.innerHTML = message;
      this.root.facebookMessage.innerHTML = 'error';
      this.root.facebookMessage.style.cssText = 'background-image: url(\'./src/blocks/form-job/images/form-orange.png\');';
      setTimeout(() => {
        this.root.facebookErrorMessage.innerHTML = '';
      }, 2000);
    } else {
      this.root.facebookErrorMessage.innerHTML = '';
      this.root.facebookMessage.innerHTML = 'thanks!';
      this.root.facebookMessage.style.cssText = 'background-image: url(\'./src/blocks/form-job/images/form-color2.png\');';
      setTimeout(() => {
        this.root.facebookErrorMessage.innerHTML = '';
      }, 2000);
    }

    if (errorTwitter === true) {
      this.root.twitterErrorMessage.innerHTML = message;
      this.root.twitterMessage.innerHTML = 'error';
      this.root.twitterMessage.style.cssText = 'background-image: url(\'./src/blocks/form-job/images/form-orange.png\');';
      setTimeout(() => {
        this.root.twitterErrorMessage.innerHTML = '';
      }, 2000);
    } else {
      this.root.twitterErrorMessage.innerHTML = '';
      this.root.twitterMessage.innerHTML = 'thanks!';
      this.root.twitterMessage.style.cssText = 'background-image: url(\'./src/blocks/form-job/images/form-color2.png\');';
      setTimeout(() => {
        this.root.twitterErrorMessage.innerHTML = '';
      }, 2000);
    }

    if (errorDribbble === true) {
      this.root.dribbbleErrorMessage.innerHTML = message;
      this.root.dribbbleMessage.innerHTML = 'error';
      this.root.dribbbleMessage.style.cssText = 'background-image: url(\'./src/blocks/form-job/images/form-orange.png\');';
      setTimeout(() => {
        this.root.dribbbleErrorMessage.innerHTML = '';
      }, 2000);
    } else {
      this.root.dribbbleErrorMessage.innerHTML = '';
      this.root.dribbbleMessage.innerHTML = 'thanks!';
      this.root.dribbbleMessage.style.cssText = 'background-image: url(\'./src/blocks/form-job/images/form-color2.png\');';
      setTimeout(() => {
        this.root.dribbbleErrorMessage.innerHTML = '';
      }, 2000);
    }

    if (fillJob === false
      || fillFacebook === false
      || fillTwitter === false
      || fillDribbble === false) {
      this.root.completeForm.innerHTML = formNotComplete;
    } else {
      this.root.completeForm.innerHTML = '';
    }
  }
}

const root = document.getElementsByClassName('js-form-job');

for (let i = 0; i < root.length; i += 1) {
  new FormJob(root[i]);
}