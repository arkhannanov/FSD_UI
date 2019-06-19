import '../../blocks/calendar/calendar.js'
import '../../blocks/button/button.js'

function importAll(resolve) {
    resolve.keys().forEach(resolve);
  }
  
importAll(require.context('./../../', true, /\.(scss)$/));