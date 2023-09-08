import { createApp } from 'vue';
import App from './app.vue';
import UxWebBase from 'ux-web-base-components';
const app = createApp(App);
app.use(UxWebBase);
console.log(`output->test`, 'test');
app.mount('#app');
