<script setup="">
import {ref, onMounted} from 'vue'
import HomePage from "./pages/MainPage.vue";
import { useUserStore } from "./stores/base.js"
import {useRouter} from 'vue-router'
const router = useRouter()
const store = useUserStore()
const { fetchTodo, checkUser } = store

const vIf = ref(true)
onMounted(async () => {
  const checkUs = await checkUser()
  await router.push({ name: checkUs })
  if (checkUs === 'registration page') {
    vIf.value = false
  }
  await fetchTodo()
      .then(() => {
        console.log('ok')
      })
      .catch(() => {
        console.log('not ok')
      })
})
</script>

<template>
  <HomePage v-if="vIf"></HomePage>
  <router-view v-else></router-view>
  <router-view name="registartion page"></router-view>
</template>

<style scoped lang="scss">

</style>