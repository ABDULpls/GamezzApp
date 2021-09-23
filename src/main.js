import { createApp } from 'vue';
import router from './router/router';
import store from './store/store';
import App from './App.vue';

// Plugins
import toastify from './plugins/toastify.plugin';
import './assets/css/toasts.css';

// Create App
const app = createApp(App);

// App config
app.config.unwrapInjectedRef = true;

app
    .use(toastify)
    .use(router)
    .use(store)
    .mount('#app');