<template>
  <nav class="flex items-center justify-between p-4 bg-zinc-900 border-b-white border-solid border-b mb-1">
    <div class="flex items-center gap-2">
      <music-icon class="w-6" />
      <h1 class="text-2xl font-bold text-white">Music</h1>
    </div>
    <div class="flex items-center gap-2">
      <search-icon class="w-6" />
      <input
        type="text"
        placeholder="Search"
        class="bg-zinc-800 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
    </div>
    <div class="flex items-center gap-3">
      <heart-icon class="w-6" />
      <clock-icon class="w-7" />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const MusicIcon = defineAsyncComponent(() => import("./img/MusicIcon.vue"));
const SearchIcon = defineAsyncComponent(() => import("./img/SearchIcon.vue"));
const HeartIcon = defineAsyncComponent(() => import("./img/HeartIcon.vue"));
const ClockIcon = defineAsyncComponent(() => import("./img/ClockIcon.vue"));
</script>

<style scoped>
</style>