class Stages {
  constructor(root) {
    this.firstCircle = root.firstCircle;
    this.secondCircle = root.secondCircle;
    this.thirdCircle = root.thirdCircle;
    this.fourthCircle = root.fourthCircle;
    this.fifthCircle = root.fifthCircle;
    this.firstDiv = root.firstDiv;
    this.secondDiv = root.secondDiv;
    this.thirdDiv = root.thirdDiv;
    this.fourthDiv = root.fourthDiv;
    this.enableFirstCircle();
    this.enableSecondCircle();
    this.enableThirdCircle();
    this.enableFourthCircle();
    this.enableFifthCircle();
  }

  enableFirstCircle() {
    this.firstCircle.addEventListener('click', this.checkFirstCircle.bind(this));
  }

  enableSecondCircle() {
    this.secondCircle.addEventListener('click', this.checkSecondCircle.bind(this));
  }

  enableThirdCircle() {
    this.thirdCircle.addEventListener('click', this.checkThirdCircle.bind(this));
  }

  enableFourthCircle() {
    this.fourthCircle.addEventListener('click', this.checkFourthCircle.bind(this));
  }

  enableFifthCircle() {
    this.fifthCircle.addEventListener('click', this.checkFifthCircle.bind(this));
  }

  checkFirstCircle() {
    this.firstCircle.style.cssText = 'background: #e75735; color: white;';
    this.secondCircle.style.cssText = 'background: #e5e5e5; color: #888888;';
    this.thirdCircle.style.cssText = 'background: #e5e5e5; color: #888888';
    this.fourthCircle.style.cssText = 'background: #e5e5e5; color: #888888';
    this.fifthCircle.style.cssText = 'background: #e5e5e5; color: #888888';
    this.firstDiv.style.cssText = 'background: #e5e5e5;';
    this.secondDiv.style.cssText = 'background: #e5e5e5;';
    this.thirdDiv.style.cssText = 'background: #e5e5e5;';
    this.fourthDiv.style.cssText = 'background: #e5e5e5;';
  }

  checkSecondCircle() {
    this.firstCircle.style.cssText = 'background: #e75735; color: white;';
    this.secondCircle.style.cssText = 'background: #e75735; color: white;';
    this.thirdCircle.style.cssText = 'background: #e5e5e5; color: #888888';
    this.fourthCircle.style.cssText = 'background: #e5e5e5; color: #888888';
    this.fifthCircle.style.cssText = 'background: #e5e5e5; color: #888888';
    this.firstDiv.style.cssText = 'background: #e75735;';
    this.secondDiv.style.cssText = 'background: #e5e5e5;';
    this.thirdDiv.style.cssText = 'background: #e5e5e5;';
    this.fourthDiv.style.cssText = 'background: #e5e5e5;';
  }

  checkThirdCircle() {
    this.firstCircle.style.cssText = 'background: #e75735; color: white;';
    this.secondCircle.style.cssText = 'background: #e75735; color: white;';
    this.thirdCircle.style.cssText = 'background: #e75735; color: white;';
    this.fourthCircle.style.cssText = 'background: #e5e5e5; color: #888888';
    this.fifthCircle.style.cssText = 'background: #e5e5e5; color: #888888';
    this.firstDiv.style.cssText = 'background: #e75735;';
    this.secondDiv.style.cssText = 'background: #e75735;';
    this.thirdDiv.style.cssText = 'background: #e5e5e5;';
    this.fourthDiv.style.cssText = 'background: #e5e5e5;';
  }

  checkFourthCircle() {
    this.firstCircle.style.cssText = 'background: #e75735; color: white;';
    this.secondCircle.style.cssText = 'background: #e75735; color: white;';
    this.thirdCircle.style.cssText = 'background: #e75735; color: white;';
    this.fourthCircle.style.cssText = 'background: #e75735; color: white;';
    this.fifthCircle.style.cssText = 'background: #e5e5e5; color: #888888';
    this.firstDiv.style.cssText = 'background: #e75735; ';
    this.secondDiv.style.cssText = 'background: #e75735;';
    this.thirdDiv.style.cssText = 'background: #e75735;';
    this.fourthDiv.style.cssText = 'background: #e5e5e5;';
  }

  checkFifthCircle() {
    this.firstCircle.style.cssText = 'background: #e75735; color: white;';
    this.secondCircle.style.cssText = 'background: #e75735; color: white;';
    this.thirdCircle.style.cssText = 'background: #e75735; color: white;';
    this.fourthCircle.style.cssText = 'background: #e75735; color: white;';
    this.fifthCircle.style.cssText = 'background: #e75735; color: white;';
    this.firstDiv.style.cssText = 'background: #e75735;';
    this.secondDiv.style.cssText = 'background: #e75735;';
    this.thirdDiv.style.cssText = 'background: #e75735;';
    this.fourthDiv.style.cssText = 'background: #e75735;';
  }
}

const root = {
  firstCircle: document.getElementsByClassName('stages__first-circle')[0],
  secondCircle: document.getElementsByClassName('stages__second-circle')[0],
  thirdCircle: document.getElementsByClassName('stages__third-circle')[0],
  fourthCircle: document.getElementsByClassName('stages__fourth-circle')[0],
  fifthCircle: document.getElementsByClassName('stages__fifth-circle')[0],
  firstDiv: document.getElementsByClassName('stages__first-div')[0],
  secondDiv: document.getElementsByClassName('stages__second-div')[0],
  thirdDiv: document.getElementsByClassName('stages__third-div')[0],
  fourthDiv: document.getElementsByClassName('stages__fourth-div')[0],
};

new Stages(root);