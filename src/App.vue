<script setup="">
import {onMounted} from 'vue'
import HomePage from "./pages/MainPage.vue";
import { useUserStore } from "./stores/base.js"
const store = useUserStore()
const { fetchTodo, visitsInSite } = store
onMounted(async () => {
  visitsInSite()
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

  <HomePage></HomePage>

</template>

<style scoped lang="scss">

</style>