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
    firstCircle: document.getElementById('stages__first-circle'),
    secondCircle: document.getElementById('stages__second-circle'),
    thirdCircle: document.getElementById('stages__third-circle'),
    fourthCircle: document.getElementById('stages__fourth-circle'),
    fifthCircle: document.getElementById('stages__fifth-circle'),
    firstDiv: document.getElementById('stages__first-div'),
    secondDiv: document.getElementById('stages__second-div'),
    thirdDiv: document.getElementById('stages__third-div'),
    fourthDiv: document.getElementById('stages__fourth-div'),
};

new Stages(root);