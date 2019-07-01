import '../../blocks/button/button';
import '../../blocks/calendar/calendar';
import '../../blocks/form-sigma/form-sigma';
import '../../blocks/slider/slider';
import '../../blocks/page-sigma/drop-down';

function importAll(resolve) {
    resolve.keys().forEach(resolve);
}

importAll(require.context('./../../', true, /\.(scss)$/));