class Button {
    constructor(root) {
        this.root = root;
        this.enableRippleEffect();
    }

    enableRippleEffect() {
        this.root.addEventListener('click', this.createRipple);
    }

    createRipple(elem) {
        const circle = document.createElement('div');
        this.append(circle);
        const diametr = Math.max(this.clientWidth, this.clientHeight);
        circle.style.width = `${diametr}px`;
        circle.style.height = `${diametr}px`;
        circle.style.left = `${elem.clientX - this.offsetLeft + window.pageXOffset - diametr / 2}px`;
        circle.style.top = `${elem.clientY - this.offsetTop + window.pageYOffset - diametr / 2}px`;
        circle.classList.add('ripple');
    }
}

const buttons = document.getElementsByName('button');

buttons.forEach((item) => {
    new Button(item);
});