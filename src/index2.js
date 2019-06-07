import './js/stages.js'
import './js/button.js'
import './js/toggles.js'
import './js/form2.js'

function importAll(resolve) {
    resolve.keys().forEach(resolve);
  }
  
importAll(require.context('./', true, /\.(scss)$/));