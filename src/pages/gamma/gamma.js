import '../../blocks/stages/js/stages.js'
import '../../blocks/calendar/js/calendar.js'
import '../../blocks/button/js/button.js'
import '../../blocks/location/js/location.js'

function importAll(resolve) {
    resolve.keys().forEach(resolve);
  }
  
importAll(require.context('../../', true, /\.(scss)$/));