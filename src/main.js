import { createApp } from 'vue'
import App from './App.vue'
// - pinia
import { createPinia } from 'pinia'
// - vuetify
import vuetify from './plugins/vuetify'
// - router
import router from './router'
// 
import cors from 'cors'
// dayjs
import dayjs from 'dayjs';

const app = createApp(App)
app.use(createPinia())
router.afterEach(() => {
    requestAnimationFrame(() => {
        const top = document.getElementById('app').offsetTop;
        window.scrollTo({
            top,
            behavior: 'auto',
            block: 'start',
        });
    });
});
app.use(router)
app.use(vuetify)
app.use(cors)
app.config.globalProperties.$dayjs = dayjs;
app.mount('#app')