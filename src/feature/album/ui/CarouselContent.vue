<template>
  <section class="flex flex-col gap-3 w-full max-w-3xl">
    <h2 class="text-2xl font-bold text-white">{{ props.title }}</h2>
    <div class="flex gap-3 items-center">
      <div class="flex gap-2 overflow-x-scroll overflow-y-hidden">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="
            flex flex-col items-center gap-1
            flex-shrink-0 overflow-hidden relative
          "
        >
          <div class="relative border-2 border-gray-400 rounded-lg overflow-hidden group">
            <img
              :src="image.src"
              :alt="image.alt"
              loading="lazy"
              class="w-36 sm:w-52 h-36 sm:h-52 object-contain"
            />
            <div
              class="
                absolute top-0 left-0 w-full h-full
                hidden group-hover:flex
                justify-center items-center
                bg-black bg-opacity-70
                transition-all duration-300 ease-in-out
              "
            >
              <Button
                class="
                  bg-red-500 hover:bg-red-600
                  flex p-2 rounded text-black opacity-0
                  group-hover:opacity-100 transition-opacity duration-300 ease-in-out
                "
              >
                <play-icon class="w-5" />
              </Button>
            </div>
          </div>
          <div class="text-center">
            <p class="text-white font-bold">{{ image.title }}</p>
            <p class="text-gray-300 text-sm">{{ image.artist }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

import { defineAsyncComponent } from "vue";

const PlayIcon = defineAsyncComponent(() => import("./img/PlayIcon.vue"));

interface IProps {
  title: string;
  // images: {
  //   src: string;
  //   alt: string;
  // }[];
}

const props = defineProps<IProps>();

const images = [
  { src: "https://picsum.photos/400/400", alt: "Image 1", title: "Album 1", artist: "Artist 1" },
  { src: "https://loremflickr.com/400/400", alt: "Image 2", title: "Album 2", artist: "Artist 2" },
  { src: "https://picsum.photos/400/400", alt: "Image 3", title: "Album 3", artist: "Artist 3" },
  { src: "https://loremflickr.com/400/400", alt: "Image 4", title: "Album 4", artist: "Artist 4" },
  { src: "https://picsum.photos/400/400", alt: "Image 5", title: "Album 5", artist: "Artist 5" },
];
</script>

<style scoped>
</style>