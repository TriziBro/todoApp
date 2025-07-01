<script setup>

</script>

<template>
  <v-container>
    <h1 class="loading-title">Загрузка...</h1>
    <v-progress-circular
        color="primary"
        model-value="20"
        :size="80"
        :width="10"
        indeterminate
    ></v-progress-circular>
  </v-container>
</template>

<style scoped lang="scss">
.v-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.v-progress-circular {
  margin-left: 20px;
}
</style>