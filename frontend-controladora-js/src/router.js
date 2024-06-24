import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/backups",
    name: "backups",
    component: () => import("./components/BackupsList")
  },
  {
    path: "/backups/:id",
    name: "backups-details",
    component: () => import("./components/Backup")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddBackup")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
