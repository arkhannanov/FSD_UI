import '../../blocks/button/button.js'
import '../../blocks/calendar/calendar.js'
import '../../blocks/form-sigma/form-sigma.js'
import '../../blocks/slider/slider.js'

function importAll(resolve) {
    resolve.keys().forEach(resolve);
  }
  
importAll(require.context('./../../', true, /\.(scss)$/));