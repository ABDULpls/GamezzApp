import {App} from 'vue';
import toastify from '../libs/toastify';

export default {
    install(app: App, options = {}) {
        app.config.globalProperties.$toastify = toastify(options);
    },
};