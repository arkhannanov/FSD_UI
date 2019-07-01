class StepSlider {
    constructor(root) {
        this.rangeSlider = root.rangeSlider;
        this.color = root.color;
        this.enableRangeSlider();
    }

    enableRangeSlider() {
        this.rangeSlider.addEventListener('input', this.showSliderValue.bind(this), false);
    }

    showSliderValue() {
        const bulletPosition = (this.rangeSlider.value / this.rangeSlider.max);
        this.color.style.width = `${(bulletPosition * 235) + 6}px`;
    }
}
const root = {
    rangeSlider: document.getElementById('step-slider__rs-range'),
    color: document.getElementById('step-slider_color'),
};

new StepSlider(root);
