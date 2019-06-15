import '../../js/stages.js'
import '../../js/calendar.js'
import '../../js/button.js'
import '../../js/location.js'

function importAll(resolve) {
    resolve.keys().forEach(resolve);
  }
  
importAll(require.context('../../', true, /\.(scss)$/));