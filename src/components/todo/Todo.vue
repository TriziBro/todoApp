<script setup="">
import {ref, computed} from 'vue'
import {useRouter} from 'vue-router'
import {useUserStore} from "../../stores/base.js";
import {_} from 'lodash'
const store = useUserStore()
//
const router = useRouter()
//

const addWrite = async () => {
  await router.push({ name: 'todo add' });
}
const toId = ref(true)
const hrefToId = async (id) => {
  localStorage.setItem("urlRouter", JSON.stringify(router.currentRoute.value.fullPath))
  await router.push({ name: 'todo ID', params: { id: id } });
}


</script>

<template>

  <div class="block-write" v-if="toId">
    <div class="add-write-block">
      <h1 class="add-write-block-title">Ваши записи</h1>
      <v-btn class="add-write-block-btn" @click="addWrite()">Добавить запись</v-btn>
    </div>
    <div class="write-block-for" v-if="store.todo.length > 0" v-for="i in store.todo" @click="hrefToId(i.id)">
      <p class="write-block-card-date">{{ i.date }}</p>
      <v-card class="write-block-card">
        <div class="write-block">
          <h1 class="write-block-title">{{ i.title }}</h1>
          <p class="write-block-text">{{ i.text }}</p>
        </div>
      </v-card>
      <v-divider></v-divider>
    </div>
    <div class="write-block-empty" v-else>
      Пусто
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>