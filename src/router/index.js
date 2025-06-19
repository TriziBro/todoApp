import {createRouter, createWebHistory} from 'vue-router'
import HomePage from "../pages/HomePage.vue";

const routes = [
    {
        path: '/',
        name: 'homepage',
        component: HomePage,
    }
]
const router = createRouter({
    // history: createWebHistory(process.env.NODE_ENV === 'production' ? '/' : process.env.BASE_URL),
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})
export default router