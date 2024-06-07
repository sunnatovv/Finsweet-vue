import { createRouter, createWebHistory } from "vue-router";

import home from "../pages/home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../pages/about.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../pages/contact.vue"),
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import("../pages/blog.vue"),
    },
    {
      path: "/pricing",
      name: "pricing",
      component: () => import("../pages/pricing.vue"),
    },
    {
      path: "/work",
      name: "work",
      component: () => import("../pages/work.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../pages/not-found.vue"),
    },
  ],
});

export default router;
