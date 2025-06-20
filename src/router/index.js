import {createRouter, createWebHistory} from 'vue-router'
import HomePage from "../pages/HomePage.vue";
import Todo from "../components/todo/Todo.vue";
import TodoRouter from "../components/todo/TodoRouter.vue";
import Throw from "../components/Throw.vue";
import TodoID from '../components/todo/ID/TodoID.vue'

const routes = [
    {
        path: '/',
        name: 'homepage',
        component: HomePage,
    },
    {

        path: '/todo/',
        name: 'todo',
        component: TodoRouter,
        children: [
            {
                path: 'page/',
                name: 'todo page',
                component: Todo
            },
            {
                path: 'id/:id/',
                name: 'todo ID',
                component: TodoID
            }
        ]
    },
    {
        path: '/throw/',
        name: 'throw',
        component: Throw
    }
]
const router = createRouter({
    // history: createWebHistory(process.env.NODE_ENV === 'production' ? '/' : process.env.BASE_URL),
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})
export default router