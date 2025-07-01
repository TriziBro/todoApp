<script setup="">
import {ref, onMounted} from 'vue'
import HomePage from "./pages/MainPage.vue";
import LoadingPage from "./pages/LoadingPage.vue";
import { useUserStore } from "./stores/base.js"
import {useRouter} from 'vue-router'
const router = useRouter()
const store = useUserStore()
const { fetchTodo, visitsInSite } = store
const vIf = ref(true)
const loading = ref(true)
onMounted(async () => {
  visitsInSite()
  const checkUs = JSON.parse(localStorage.getItem('login'))
  if (checkUs === true) {
    vIf.value = true
  } else if (checkUs === false) {
    vIf.value = false
    await router.push({ name: 'registration page' })

  }
  const checkId = ref(JSON.parse(localStorage.getItem("check")))
  await fetchTodo(checkId.value)
      .then(() => {
        loading.value = false
        // console.log('ok')
      })
      .catch(() => {
        // console.log('not ok')
      })
})
</script>

<template>
  <LoadingPage v-if="loading"></LoadingPage>
  <div v-else>
    <HomePage v-if="vIf"><h1>{{ todo2 }}</h1></HomePage>
    <router-view v-else></router-view>
    <router-view name="registartion page"></router-view>
  </div>


</template>

<style scoped lang="scss">

</style>