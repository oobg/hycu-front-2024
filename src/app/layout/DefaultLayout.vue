<template>
  <Header />
  <main class="flex flex-col justify-start flex-1 overflow-auto">
    <router-view />
  </main>
</template>

<script setup lang="ts">
import Header from "@/widgets/header/index.vue";
</script>

<style scoped>
</style>