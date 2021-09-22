import toastify from '../libs/toastify/toastify';

export default {
    install(app, options= {}) {
        app.config.globalProperties.$toastify = toastify(options);
    },
};