import '../../blocks/button/button';
import '../../blocks/calendar/calendar';
import '../../blocks/location/location';

function importAll(resolve) {
    resolve.keys().forEach(resolve);
}

importAll(require.context('./../../', true, /\.(scss)$/));