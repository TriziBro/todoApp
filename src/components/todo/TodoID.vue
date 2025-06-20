<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
//
const router = useRouter()
const id = ref(router.currentRoute.value.params.id)
const toBack = async () => {
  const url = ref(JSON.parse(localStorage.getItem("urlRouter")))
  await router.push({ path: `${url.value}` })
}
</script>

<template>
  <p @click="toBack()">Назад</p>
  <h1>{{ id }}</h1>
</template>

<style scoped lang="scss">

</style>