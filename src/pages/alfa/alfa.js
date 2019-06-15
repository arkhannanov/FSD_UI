import '../../blocks/button/js/button.js'
import '../../blocks/calendar/js/calendar.js'

function importAll(resolve) {
    resolve.keys().forEach(resolve);
  }
  
importAll(require.context('../../.', true, /\.(scss)$/));