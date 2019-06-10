import '../../js/stages.js'
import '../../js/button.js'
import '../../js/toggles.js'
import '../../js/form-second-page.js'

function importAll(resolve) {
    resolve.keys().forEach(resolve);
  }
  
importAll(require.context('../../', true, /\.(scss)$/));