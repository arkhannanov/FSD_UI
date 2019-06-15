import '../../blocks/button/js/button.js'
import '../../blocks/page-sigma/js/drop-down.js'
import '../../blocks/slider-left/js/slider-left.js'
import '../../blocks/tick-boxes/js/tick-boxes.js'
import '../../blocks/calendar/js/calendar.js'
import '../../blocks/form-sigma/js/form-sigma.js'

function importAll(resolve) {
    resolve.keys().forEach(resolve);
  }
  
importAll(require.context('../../', true, /\.(scss)$/));