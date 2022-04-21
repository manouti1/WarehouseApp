import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: "/cars",
    name: "cars",
    component: () => import("@/components/CarsList.vue"),
  },
  {
    path: "/cart",
    name: "/cart",
    component: () => import("@/components/Cart.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
