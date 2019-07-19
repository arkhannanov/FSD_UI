import '../../vendors/jquery.range';

class Slider {
  constructor(root) {
    this.root = $(root);
    this.enableSlider();
  }

  enableSlider() {
    const min = this.root.data('min');
    const max = this.root.data('max');
    const step = (this.root.data('max') - this.root.data('min')) / 4;

    this.root.jRange({
      from: this.root.data('min'),
      to: this.root.data('max'),
      step: this.root.data('step'),
      scale: [min, min + step, min + 2 * step, min + 3 * step, max],
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

const $sliders = $('.newslider');

$sliders.each(function createSlider() {
  new Slider(this);
});