import './blocks/button/button.js'
import './blocks/slider/slider.js'
import './blocks/step-slider/step-slider.js'
import './blocks/stages/stages.js'
import './blocks/form/form.js'
import './blocks/toggles/toggles.js'
import './blocks/tick-boxes/tick-boxes.js'
import './blocks/search/search.js'
import './blocks/location/location.js'
import './blocks/calendar/calendar.js'
import './blocks/player/player.js'
import './js/favicons.js'

function importAll(resolve) {
    resolve.keys().forEach(resolve);
  }
  
importAll(require.context('./', true, /\.(scss)$/));
