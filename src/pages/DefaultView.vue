<template>
  <feature-content />
  <carousel-content
    v-for="(title, index) in titles"
    :key="index"
    :title="title"
  />
</template>

<script setup lang="ts">
import { CarouselContent, FeatureContent } from "@/feature/album/index.ts";

const titles = ["최근 재생한 음악", "TV 드라마", "최신 발매", "한국 인기차트"];
</script>