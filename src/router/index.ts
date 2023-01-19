import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "notes",
      component: () => import("~views/NoteView.vue"),
    },
    {
      path: "/create",
      name: "create",
      component: () => import("~views/NoteCreateView.vue"),
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: () => import("~views/NoteEditView.vue"),
    },
  ],
});

export default router;
