import './js/button.js'
import './js/slider-left.js'
import './js/slider-right.js'
import './js/stages.js'
import './js/form.js'
import './js/toggles.js'
import './js/tick-boxes.js'
import './js/search.js'
import './js/location.js'
import './js/calendar.js'
import './js/video.js'
import './js/favicons.js'


import './main.scss'

function importAll(resolve) {
    resolve.keys().forEach(resolve);
  }
  
importAll(require.context('./', true, /\.(scss)$/));