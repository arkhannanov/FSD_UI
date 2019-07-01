import './blocks/button/button';
import './blocks/slider/slider';
import './blocks/step-slider/step-slider';
import './blocks/stages/stages';
import './blocks/form/form';
import './blocks/search/search';
import './blocks/location/location';
import './blocks/calendar/calendar';
import './blocks/player/player';
import './js/favicons';

function importAll(resolve) {
    resolve.keys().forEach(resolve);
}

importAll(require.context('./', true, /\.(scss)$/));
