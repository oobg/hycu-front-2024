import { createRouter, createWebHistory } from "vue-router";
import DefaultView from "@/pages/DefaultView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: DefaultView,
      meta: { layout: "default" }
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   component: () => import("../../pages/AboutView.vue" /* webpackChunkName: "About" */),
    // },
  ],
})

export default router
