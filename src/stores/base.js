import {ref} from 'vue'
import {defineStore} from 'pinia'
import api from '../api.js';
import _ from 'lodash'

export const useUserStore = defineStore('base', () => {
    const todo = ref([])
    const todoId = ref([])
    const status = ref(null)

    const visitsInSite = () => {
        let visits = JSON.parse(localStorage.getItem('visits'))
        if (!visits) {
            localStorage.setItem('visits', JSON.stringify(1));
            localStorage.setItem('login', JSON.stringify(false))
            visits = 1;
        } else {
            const newVisits = visits + 1;
            localStorage.setItem('visits', JSON.stringify(newVisits));
            visits = newVisits;
        }
    }
    const registrationUser = async (data) => {
        try {
            const responseData = await api.post('/registration-user', data)
            console.log('Response status:', responseData.status);
            console.log('Response data:', responseData.data.user.id);
            localStorage.setItem("check", JSON.stringify(responseData.data.user.id))
            localStorage.setItem("login", JSON.stringify(true))

            return responseData.status
        } catch (err) {
            console.log(err)
        }
    }
    const signInUser = async (data) => {
        try {
            const responseData = await api.post('/sign-in-user', data)
            console.log('Response status:', responseData.status);
            localStorage.setItem("check", JSON.stringify(responseData.data.user))
            localStorage.setItem("login", JSON.stringify(true))

            return responseData.status
        } catch (err) {
            console.log(err)
        }
    }

    const fetchTodo = async (id) => {
        try {
            const responseData = await api.post("/api/todo/list", {id: id})
            console.log(responseData.data);
            todo.value = responseData.data
            localStorage.setItem("todo", JSON.stringify(todo.value))
        } catch (error) {
            console.error('Error:', error.message)
            }
    }
    const getTodoId = async (id) => {
        try {
            const idN = ref(Number(id))
            console.log(typeof idN.value);
            todoId.value = _.filter(todo.value, { "id": idN.value })
            localStorage.setItem("todoId", JSON.stringify(todoId.value))
        } catch (e) {
            console.log(e);
        }
    }

    const addTodo = async (data) => {
        try {
            const todoId = todo.value.length + 1
            data.todo.id = todoId
            console.log(data);
            const responseData = await api.post("/api/todo/add", data)
            return responseData.status
        } catch (error) {
            console.error('Error:', error.message)
        }
    }
    return { todo, todoId, status, fetchTodo, getTodoId, registrationUser, signInUser, visitsInSite, addTodo}
})