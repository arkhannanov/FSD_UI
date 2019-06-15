import './blocks/button/js/button.js'
import './blocks/slider-left/js/slider-left.js'
import './blocks/slider-right/js/slider-right.js'
import './blocks/stages/js/stages.js'
import './blocks/form/js/form.js'
import './blocks/toggles/js/toggles.js'
import './blocks/tick-boxes/js/tick-boxes.js'
import './blocks/search/js/search.js'
import './blocks/location/js/location.js'
import './blocks/calendar/js/calendar.js'
import './blocks/player/js/player.js'
import './js/favicons.js'


import './main.scss'

function importAll(resolve) {
    resolve.keys().forEach(resolve);
  }
  
importAll(require.context('./', true, /\.(scss)$/));