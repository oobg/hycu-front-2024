<template>
  <Header />
  <main class="flex flex-col gap-5 p-5 justify-start items-center flex-1 overflow-x-hidden overflow-y-auto">
    <router-view />
  </main>
</template>

<script setup lang="ts">
import Header from "@/widgets/header/index.vue";
</script>

<style scoped>
</style>