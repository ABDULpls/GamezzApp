import { createApp } from 'vue';
import router from './router/router';
import App from './App.vue';

import toastify from './plugins/toastify.plugin';

import './assets/css/toasts.css';

const app = createApp(App);

app.config.unwrapInjectedRef = true;

app
    .use(toastify)
    .use(router)
    .mount('#app');