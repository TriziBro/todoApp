<script setup>
import {ref, onMounted, computed} from 'vue'
import {useUserStore} from '../stores/base.js'
const store = useUserStore()
const { registrationUser, signInUser } = store
import {useRouter} from 'vue-router'
const router = useRouter()

const regCheck = ref(true)
const loginInAcc = () => {
  user.value.name = null
  user.value.password = null
  regCheck.value = !regCheck.value
}
const user = ref({
  name: null,
  password: null,
})
const rulesUserName = ref([
  value => {
    if (value?.length <= 1) {
      return "Мало символов"
    } else {
      return true
    }
  }
])
const rulesUserPassword = ref([
  value => {
    if (value?.length <= 7) {
      return "Минимум 7 символов"
    } else {
      return true
    }
  }
])
const isFormValid = computed(() => {
  const nameValid = rulesUserName.value.every(rule => rule(user.value.name) === true);
  const passwordValid = rulesUserPassword.value.every(rule => rule(user.value.password) === true);
  return nameValid && passwordValid;
});

const validate = () => {
  if (user.value.name === null || user.value.password === null) return true
  console.log('Name valid:', isFormValid.value);
  return !isFormValid.value;
};
const regNewAcc = async () => {
  if (isFormValid.value) {
    console.log('Успешная регистрация', user.value);
    const regFunc = await registrationUser(user.value)
    if (regFunc === 201) {
      router.push({ path: '/' })
      window.location.reload()
    }
  } else {
    console.log('Ошибка');
  }
}
const loginNewAcc = async () => {
  if (isFormValid.value) {
    console.log('Отправка данных', user.value);
    const signInFunc = await signInUser(user.value)
    if (signInFunc === 200) {
      router.push({ path: '/' })
      window.location.reload()
    }
  } else {
    console.log('Ошибка');
  }
}
onMounted(() => {
  if (JSON.parse(localStorage.getItem("login")) === true) {
    router.push({ name: "homepage"})
  }
})
</script>

<template>

  <v-container v-if="regCheck">
    <h1 class="regTitle">Зарегестрируйтесь или выполнить <span @click="loginInAcc()">вход в аккаунт</span></h1>
    <v-form @submit.prevent="regNewAcc()">
      <v-text-field v-model="user.name"
                    label="Введите имя пользователя"
                    :rules="rulesUserName"
      ></v-text-field>
      <v-text-field v-model="user.password"
                    label="Введите пароль"
                    :rules="rulesUserPassword"
      ></v-text-field>
      <v-btn type="submit" :disabled="validate()">Зарегестрироваться</v-btn>
    </v-form>
  </v-container>
  <v-container v-else>
    <h1 class="regTitle">Выполните вход в аккаунт или <span @click="loginInAcc()">зарегестрируйтесь</span></h1>
    <v-form @submit.prevent="loginNewAcc()">
      <v-text-field v-model="user.name"
                    label="Введите имя пользователя"
                    :rules="rulesUserName"
      ></v-text-field>
      <v-text-field v-model="user.password"
                    label="Введите пароль"
                    :rules="rulesUserPassword"
      ></v-text-field>
      <v-btn type="submit" :disabled="validate()">Войти</v-btn>
    </v-form>
  </v-container>
</template>

<style scoped lang="scss">

</style>