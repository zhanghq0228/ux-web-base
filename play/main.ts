import { createApp } from 'vue';
import App from './app.vue';
import UxWebBase from 'ux-web-base-components';
import ElementPlus from 'element-plus';
const app = createApp(App);
app.use(ElementPlus).use(UxWebBase);
console.log(`output->test`, 'test');
app.mount('#app');
