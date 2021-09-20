import { createApp } from 'vue';
import router from './router/router';
import App from './App.vue';

import toastify from './plugins/toastify.plugin';

import './assets/css/toasts.css';

import MainLayout from './components/layouts/MainLayout.vue';
import AuthLayout from './components/layouts/AuthLayout.vue';

const app = createApp(App);

app.component('main-layout', MainLayout);
app.component('auth-layout', AuthLayout);

app
    .use(toastify)
    .use(router)
    .mount('#app');