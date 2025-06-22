import {createRouter, createWebHistory} from 'vue-router'
import HomePage from "../pages/HomePage.vue";
import Todo from "../components/todo/Todo.vue";
import TodoRouter from "../components/todo/TodoRouter.vue";
import Throw from "../components/throw/Throw.vue";
import ThrowRouter from "../components/throw/ThrowRouter.vue";
import TodoID from '../components/todo/TodoID.vue'
import TodoAdd from '../components/todo/TodoAdd.vue'

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
            },
            {
                path: 'add/',
                name: 'todo add',
                component: TodoAdd
            }
        ]
    },
    {
        path: '/throw/',
        name: 'throw',
        component: ThrowRouter,
        children: [
            {
                path: 'page/',
                name: 'throw page',
                component: Throw
            }
        ]
    }
]
const router = createRouter({
    // history: createWebHistory(process.env.NODE_ENV === 'production' ? '/' : process.env.BASE_URL),
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})
export default router