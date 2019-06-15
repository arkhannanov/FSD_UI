import '../../js/button.js'
import '../../js/drop_down.js'
import '../../js/slider-left.js'
import '../../js/tick-boxes.js'
import '../../js/calendar.js'
import '../../js/form-sigma.js'

function importAll(resolve) {
    resolve.keys().forEach(resolve);
  }
  
importAll(require.context('../../', true, /\.(scss)$/));