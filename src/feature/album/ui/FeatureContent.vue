<template>
  <section class="flex flex-col gap-4 max-w-3xl">
    <h1 class="text-3xl font-bold text-white">Featured Album</h1>
    <div class="relative">
      <img
        src="https://picsum.photos/800/400"
        alt="Featured Album"
        loading="lazy"
        width="800"
        height="400"
        class="border-2 border-gray-400 rounded-lg overflow-hidden"
      />
      <div class="absolute bottom-4 left-4">
        <h3 class="text-2xl font-bold text-white">Album Title</h3>
        <p class="text-gray-300">Artist Name</p>
        <Button class="mt-2 bg-red-500 hover:bg-red-600 flex p-2 rounded text-black">
          <play-icon class="w-5 text-white" />
          Play Now
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const PlayIcon = defineAsyncComponent(() => import("./img/PlayIcon.vue"));
</script>