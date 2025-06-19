<script setup>
import {ref} from 'vue'

const navigationDrawer = ref(false)

const navigationDrawerClick = () => {
  navigationDrawer.value = !navigationDrawer.value
}
</script>

<template>
  <v-app full-height theme="myCustomTheme">
    <v-app-bar></v-app-bar>

    <v-navigation-drawer v-model="navigationDrawer"><h1>asd</h1></v-navigation-drawer>
    <v-main>
      <v-btn @click="navigationDrawerClick()">Click me</v-btn>
    </v-main>
  </v-app>
</template>

<style scoped lang="scss">

</style>