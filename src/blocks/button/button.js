class Button {
  constructor(root) {
    this.root = root;
    this.enableRippleEffect();
  }

  enableRippleEffect() {
    this.root.addEventListener('click', this.handleButtonClick);
  }

  handleButtonClick(elem) {
    const circle = document.createElement('div');
    this.append(circle);
    const diameter = Math.max(this.clientWidth, this.clientHeight);
    circle.style.width = `${diameter}px`;
    circle.style.height = `${diameter}px`;
    circle.style.left = `${elem.clientX - this.offsetLeft + window.pageXOffset - 625- diameter / 2}px`;
    circle.style.top = `${elem.clientY - this.offsetTop + window.pageYOffset - 80 - diameter / 2}px`;
    circle.classList.add('button__ripple');
    setTimeout(() => {
      this.removeChild(circle);
    }, 10000);
  }
}

const buttons = document.getElementsByName('js-ripple');

for (let i = 0; i < buttons.length; i += 1) {
  new Button(buttons[i]);
}