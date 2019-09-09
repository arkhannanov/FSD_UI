class Button {
  constructor(root) {
    this.root = root;
    this._enableRippleEffect();
  }

  _enableRippleEffect() {
    this.root.addEventListener('click', this._handleButtonClick);
  }

  _handleButtonClick(elem) {

    const circle = document.createElement('div');
    this.append(circle);
    const diameter = Math.max(this.clientWidth, this.clientHeight);
    circle.style.width = `${diameter}px`;
    circle.style.height = `${diameter}px`;

    circle.style.left = `${elem.clientX - this.getBoundingClientRect().left - diameter / 2}px`;
    circle.style.top = `${elem.clientY - this.getBoundingClientRect().top - diameter / 2}px`;

    circle.classList.add('button__ripple');
    setTimeout(() => {
      this.removeChild(circle);
    }, 10000);
  }
}

const buttons = document.getElementsByName('js-ripple');

buttons.forEach(item =>  new Button(item));