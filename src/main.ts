import { createApp } from 'vue';
import App from './App.vue';

import toastify from './plugins/toastify.plugin';

import './assets/css/toasts.css';

const app = createApp(App);

app
.use(toastify)
.mount('#app');
