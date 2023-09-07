import { createApp } from 'vue';
import App from './app.vue';
import UxWebBase from '@ux-web-base/components';
const app = createApp(App);
app.use(UxWebBase);
app.mount('#app');
