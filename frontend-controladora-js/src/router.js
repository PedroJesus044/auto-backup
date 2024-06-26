import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/dashboard",
    name: "dashboard",
    component: () => import("./components/Dashboard")
  },
  {
    path: "/backups",
    name: "backups",
    component: () => import("./components/BackupsList")
  },
  {
    path: "/backups/:id",
    name: "backups-details",
    component: () => import("./components/Backup")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
