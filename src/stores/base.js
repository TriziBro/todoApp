import {ref} from 'vue'
import {defineStore} from 'pinia'
import api from '../api.js';
import _ from 'lodash'

export const useUserStore = defineStore('base', () => {
    const todo = ref([])
    const todoId = ref([])
    const status = ref(null)
    const fetchUsers = async () => {
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
    return { todo, status, fetchUsers, getTodoId}
})