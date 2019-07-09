import './blocks/button/button';
import './blocks/stages/stages';
import './blocks/form/form';
import './blocks/search/search';
import './blocks/location/location';
import './blocks/calendar/calendar';
import './blocks/player/player';
import './js/favicons';
import './blocks/slider/slider';

function importAll(resolve) {
    resolve.keys().forEach(resolve);
}

importAll(require.context('./', true, /\.(scss)$/));
