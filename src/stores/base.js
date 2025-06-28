import {ref} from 'vue'
import {defineStore} from 'pinia'
import api from '../api.js';
import _ from 'lodash'

export const useUserStore = defineStore('base', () => {
    const todo = ref([])
    const todoId = ref([])
    const status = ref(null)

    const checkUser = async () => {
        const check = ref(JSON.parse(localStorage.getItem("check")))
        console.log(check.value);
        if (check.value === null) {
            return 'registration page'
        }
    }
    const registrationUser = async (data) => {
        try {
            const responseData = await api.post('/registration-user', data)
            console.log('Response status:', responseData.status);
            console.log('Response data:', responseData.data.user.id);
            localStorage.setItem("check", responseData.data.user.id)
            if (responseData.status === 201) {
                window.location.reload()
            }
        } catch (err) {
            console.log(err)
        }
    }
    const visitsInSite = () => {
        let visits = JSON.parse(localStorage.getItem('visits'))
        if (!visits) {
            localStorage.setItem('visits', JSON.stringify(1));
            visits = 1;
            localStorage.setItem('basket_object', JSON.stringify([]))
            localStorage.setItem("basket_click_user", JSON.stringify(false))
            localStorage.setItem("user_id", JSON.stringify(null))
        } else {
            const newVisits = visits + 1;
            localStorage.setItem('visits', JSON.stringify(newVisits));
            visits = newVisits;
        }
    }
    const fetchTodo= async (id) => {
        try {
            todo.value = [
                {
                    id: 1,
                    title: "Запись 1",
                    text: "Моя первая запись в дневнике",
                    date: "10.10.2025"
                },
                {
                    id: 2,
                    title: "Запись 2",
                    text: "Моя вторая запись в дневнике",
                    date: "13.10.2025"
                },
            ]
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
    return { todo, status, visitsInSite, fetchTodo, getTodoId, checkUser, registrationUser}
})