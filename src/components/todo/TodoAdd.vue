<script setup>
import {ref, getCurrentInstance} from 'vue'
import {useUserStore} from '../../stores/base.js'
import {useRouter} from 'vue-router'
const router = useRouter()
const store = useUserStore()
const {addTodo} = store
const {appContext} = getCurrentInstance();
const currentDate = appContext.config.globalProperties.$dayjs().format('YYYY-MM-DD');
const todo = ref({
  id: null,
  title: null,
  text: null,
  date: currentDate
})
const rulesTodoTitle = ref([
  value => {
    if (value?.length <= 1) {
      return "Мало символов"
    } else {
      return true
    }
  }
])
const rulesTodoText = ref([
  value => {
    if (value?.length <= 1) {
      return "Мало символов"
    } else {
      return true
    }
  }
])
const validate = () => {
  if (todo.value.title === null || todo.value.text === null) {
    return true
  } else {
    return false
  }
};
const addNewTodo = async () => {
  const userId = ref(JSON.parse(localStorage.getItem("check")))
  const user = ref({
    id: userId.value,
    todo: todo.value
  })
  const addFunc = await addTodo(user.value)
  if (addFunc === 201) {
    await router.push({name: 'todo page'})
    window.location.reload()
  }
}
</script>

<template>

  <v-container>
    <h1 class="regTitle">Добавьте запись</h1>
    <v-form @submit.prevent="addNewTodo()">
      <v-text-field v-model="todo.title"
                    :rules="rulesTodoTitle"
                    label="Введите заголовок записи"
      ></v-text-field>
      <v-text-field v-model="todo.text"
                    :rules="rulesTodoText"
                    label="Введите текст записи"
      ></v-text-field>
      <v-btn type="submit" :disabled="validate()">Добавить запись</v-btn>
    </v-form>
  </v-container>

</template>

<style scoped lang="scss">

</style>