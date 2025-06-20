<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
//
const router = useRouter()
const id = ref(router.currentRoute.value.params.id)
</script>

<template>
  <h1>{{ id }}</h1>
</template>

<style scoped lang="scss">

</style>