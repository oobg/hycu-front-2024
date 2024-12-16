<template>
  <div class="w-dvw h-dvh flex flex-col">
    <Header />
    <main class="flex-1 overflow-auto">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from "@/widgets/header/index.vue";
</script>

<style scoped>
</style>