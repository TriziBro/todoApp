<script setup>
import {ref, onMounted} from 'vue'
import {useRouter} from 'vue-router'
import { useUserStore } from "../../stores/base.js"
const store = useUserStore()
const { getTodoId } = store
//
const router = useRouter()
const todoId = ref(null)
const id = ref(null)
const toBack = async () => {
  const url = ref(JSON.parse(localStorage.getItem("urlRouter")))
  await router.push({ path: `${url.value}` })
}
onMounted(async () => {
  id.value = router.currentRoute.value.params.id
  await getTodoId(id.value)
      .then(() => {
        todoId.value = JSON.parse(localStorage.getItem("todoId"))
        console.log(todoId.value);
      })
      .catch((e) => {
        console.log(e);
      })
})
</script>

<template>
  <p @click="toBack()">Назад</p>
  <div class="block" v-for="id in todoId">
    <h1>{{ id.title }}</h1>
    <p>{{ id.text }}</p>
  </div>
</template>

<style scoped lang="scss">

</style>