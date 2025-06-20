<script setup="">
import {ref} from 'vue'

const arrayWrite = ref([
  {
    title: "Запись 1",
    text: "Моя первая запись в дневнике",
    date: "10.10.2025"
  },
  {
    title: "Запись 2",
    text: "Моя вторая запись в дневнике",
    date: "13.10.2025"
  },
])
const addWrite = () => {
  console.log('ADD')
}
</script>

<template>

  <div class="block-write">
    <div class="add-write-block">
      <h1 class="add-write-block-title">Ваши записи</h1>
      <v-btn class="add-write-block-btn" @click="addWrite()">Добавить запись</v-btn>
    </div>
    <div class="write-block-for" v-for="i in arrayWrite">
      <p class="write-block-card-date">{{ i.date }}</p>
      <v-card class="write-block-card">
        <div class="write-block">
          <h1 class="write-block-title">{{ i.title }}</h1>
          <p class="write-block-text">{{ i.text }}</p>
        </div>
      </v-card>
      <v-divider></v-divider>
    </div>
  </div>

</template>

<style scoped lang="scss">

</style>