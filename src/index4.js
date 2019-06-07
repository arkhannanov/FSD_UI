import './js/button.js'
import './js/drop_down.js'
import './js/slider1.js'
import './js/tick_boxes.js'
import './js/calendar.js'
import './js/form3.js'

function importAll(resolve) {
    resolve.keys().forEach(resolve);
  }
  
importAll(require.context('./', true, /\.(scss)$/));