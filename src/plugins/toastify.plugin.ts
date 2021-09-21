import {App} from 'vue';
import toastify from '../libs/toastify/toastify';

import {IOptions, IToastify} from '../libs/toastify/types';

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $toastify: IToastify;
    }
}

export default {
    install(app: App, options: IOptions = {}) {
        app.config.globalProperties.$toastify = toastify(options);
    },
};