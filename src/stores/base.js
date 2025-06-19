import { defineStore } from 'pinia'
import axios from 'axios'
import _ from 'lodash'

export const useUserStore = defineStore( {
    id: 'base',
    state: () => ({
        users: [],
    }),
    actions: {
        async fetchUsers() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users')
                // Используем Lodash для сортировки пользователей по имени
                this.users = _.orderBy(response.data, ['name'], ['asc'])
            } catch (error) {
                console.error('Ошибка при получении пользователей:', error)
            }
        },
        async addUser(user) {
            try {
                const response = await axios.post('https://jsonplaceholder.typicode.com/users', user)
                this.users.push(response.data)
                // Пересортировка после добавления
                this.users = _.orderBy(this.users, ['name'], ['asc'])
            } catch (error) {
                console.error('Ошибка при добавлении пользователя:', error)
            }
        },
    }
})