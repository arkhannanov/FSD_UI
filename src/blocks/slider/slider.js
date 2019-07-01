class Slider {
    constructor(root) {
        this.rangeSlider = root.rangeSlider;
        this.rangeBullet = root.rangeBullet;
        this.enableRangeSlider();
    }

    enableRangeSlider() {
        this.rangeSlider.addEventListener('input', this.showSliderValue.bind(this), false);
    }

    showSliderValue() {
        this.rangeBullet.innerHTML = this.rangeSlider.value;
        const bulletPosition = (this.rangeSlider.value / this.rangeSlider.max);
        this.rangeBullet.style.left = `${bulletPosition * 235}px`;
    }
}

const root = {
    rangeSlider: document.getElementById('rs-range-line'),
    rangeBullet: document.getElementById('rs-bullet'),
}

new Slider(root);