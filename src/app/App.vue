<template>
  <component :is="currentView" />
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from "vue"
import { useRoute } from "vue-router"

const DefaultLayout = defineAsyncComponent(() => import("@/app/layout/DefaultLayout.vue"))

const route = useRoute();
const currentView = computed(() => {
  switch (route?.meta?.layout) {
    case "default":
    default:
      return DefaultLayout;
  }
});
</script>

<style scoped>
</style>
