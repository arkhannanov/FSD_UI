import '../../blocks/stages/stages';
import '../../blocks/form-betta/form-betta';
import '../../blocks/button/button';

function importAll(resolve) {
    resolve.keys().forEach(resolve);
}

importAll(require.context('./../../', true, /\.(scss)$/));