import '../../blocks/calendar/calendar';
import '../../blocks/button/button';

function importAll(resolve) {
    resolve.keys().forEach(resolve);
}

importAll(require.context('./../../', true, /\.(scss)$/));