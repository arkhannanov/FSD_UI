import '../../blocks/button/button';
import '../../blocks/calendar/calendar';
import '../../blocks/form-rent-auto/form-rent-auto';
import '../../blocks/slider/slider';
import '../../blocks/page-rent-auto/drop-down';

function importAll(resolve) {
    resolve.keys().forEach(resolve);
}

importAll(require.context('./../../', true, /\.(scss)$/));