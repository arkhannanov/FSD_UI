import '../../blocks/stages/stages';
import '../../blocks/form-job/form-job';
import '../../blocks/button/button';

function importAll(resolve) {
    resolve.keys().forEach(resolve);
}

importAll(require.context('./../../', true, /\.(scss)$/));