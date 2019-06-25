import '../../blocks/button/button.js'
import '../../blocks/calendar/calendar.js'
import '../../blocks/location/location.js'

function importAll(resolve) {
    resolve.keys().forEach(resolve);
  }
  
importAll(require.context('./../../', true, /\.(scss)$/));