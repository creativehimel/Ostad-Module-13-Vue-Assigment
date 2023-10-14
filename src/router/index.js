import { createRouter, createWebHistory } from "vue-router";
import User from "../views/User.vue";
import UserDetails from "../views/UserDetails.vue";
import PageNotFound from "../views/PageNotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: User,
    },
    {
      path: "/user-details",
      name: "user",
      component: UserDetails,
    },
    {
      path: "/:pathMatch(.*)*",
      component: PageNotFound,
    },
  ],
});

export default router;
