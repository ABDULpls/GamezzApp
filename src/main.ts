import { createApp } from 'vue';
import router from './router';
import App from './App.vue';

import toastify from './plugins/toastify.plugin';

import './assets/css/toasts.css';

const app = createApp(App);

app
    .use(toastify)
    .use(router)
    .mount('#app');