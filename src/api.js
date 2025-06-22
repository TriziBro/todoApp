import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000'
})

// Доступ к переменным окружения через import.meta.env
const { VITE_COUCHBASE_USERNAME, VITE_COUCHBASE_PASSWORD } = import.meta.env

api.interceptors.request.use(
    config => {
        if (VITE_COUCHBASE_USERNAME && VITE_COUCHBASE_PASSWORD) {
            config.headers.Authorization = `Basic ${Buffer.from(
                `${VITE_COUCHBASE_USERNAME}:${VITE_COUCHBASE_PASSWORD}`
            ).toString('base64')}`
        }
        console.log('Request:', config.url, config.headers) // Отладка
        return config
    },
    error => Promise.reject(error)
)

api.interceptors.response.use(
    response => response,
    error => {
        console.error('Response error:', error.response?.status, error.message)
        return Promise.reject(error)
    }
)

export default api