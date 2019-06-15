import '../../blocks/stages/js/stages.js'
import '../../blocks/button/js/button.js'
import '../../blocks/toggles/js/toggles.js'
import '../../blocks/form-betta/js/form-betta.js'

function importAll(resolve) {
    resolve.keys().forEach(resolve);
  }
  
importAll(require.context('../../', true, /\.(scss)$/));