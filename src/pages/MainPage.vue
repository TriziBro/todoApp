<script setup>
import {ref} from 'vue'
import RouterComponent from "../components/RouterComponent.vue";

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
        <v-col>
          <router-link to="/">Домой</router-link>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-navigation-drawer v-model="navigationDrawer">
      <div class="navigation-block">
        <h1 class="navigation-block-title">Что открыть?</h1>
        <v-divider></v-divider>
        <router-link class="navigation-block-link" to="/todo/page/">Дневник</router-link>
        <router-link class="navigation-block-link" to="/throw/">Бросить</router-link>
      </div>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <RouterComponent></RouterComponent>
      </v-container>
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