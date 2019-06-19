import '../../blocks/stages/stages.js'
import '../../blocks/form-betta/form-betta.js'
import '../../blocks/toggles/toggles.js'
import '../../blocks/button/button.js'

function importAll(resolve) {
    resolve.keys().forEach(resolve);
  }
  
importAll(require.context('./../../', true, /\.(scss)$/));