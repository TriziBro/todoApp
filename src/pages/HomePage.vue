<script setup>
import {ref} from 'vue'

const navigationDrawer = ref(false)

const navigationDrawerClick = () => {
  navigationDrawer.value = !navigationDrawer.value
}
</script>

<template>
  <v-app full-height theme="myCustomTheme">
    <v-app-bar>
      <v-row>
        <v-col>
          <v-btn @click="navigationDrawerClick()">Меню</v-btn>
        </v-col>
        <v-col></v-col>
      </v-row>
    </v-app-bar>

    <v-navigation-drawer v-model="navigationDrawer">
      <div class="navigation-block">
        <h1 class="navigation-block-title">Что открыть?</h1>
        <v-divider></v-divider>
        <router-link class="navigation-block-link" to="todo">Дневник</router-link>
        <router-link class="navigation-block-link" to="throw">Бросить</router-link>
      </div>
    </v-navigation-drawer>
    <v-main>
      <router-view name="todo"></router-view>
      <router-view name="throw"></router-view>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<style scoped lang="scss">

// navigation

.navigation-block {
  width: 100%;
  display: flex;
  flex-direction: column;
}

//.navigation-block-title {}

//.navigation-block-link {}

</style>