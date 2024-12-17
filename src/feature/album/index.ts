import { defineAsyncComponent } from "vue";

const CarouselContent = defineAsyncComponent(() => import(/* webpackChunkName: "CarouselContent" */ "./ui/CarouselContent.vue"));
const FeatureContent = defineAsyncComponent(() => import(/* webpackChunkName: "FeatureContent" */ "./ui/FeatureContent.vue"));

export {
	CarouselContent,
	FeatureContent,
}