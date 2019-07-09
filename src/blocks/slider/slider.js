import '../../js/jquery.range';

class Slider {
    constructor(root) {
        this.root = $(root);
        this.enableSlider();
    }

    enableSlider() {
        const value1 = this.root.data('min');
        const value5 = this.root.data('max');
        const step = (this.root.data('max') - this.root.data('min')) / 4;
        const value2 = value1 + step;
        const value3 = value2 + step;
        const value4 = value3 + step;

        this.root.jRange({
            from: this.root.data('min'),
            to: this.root.data('max'),
            step: this.root.data('step'),
            scale: [value1, value2, value3, value4, value5],
            format: '%s',
            width: 260,
            showLabels: this.root.data('label'),
            snap: true,
            theme: `theme-${this.root.data('color')}`,
            showScale: this.root.data('dial'),
        });

        this.root.jRange('setValue', `${this.root.data('value')}`);
    }
}

const sliders = $('.newslider');

sliders.each(function createSlider() {
    new Slider(this);
});