import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/login",
    name: "login",
    component: () => import("./components/Login")
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("./components/Dashboard"),
    meta: {
      requiresAuth: true, // Add meta field to indicate protected route
      mustBeAdmin: false
    }
  },
  {
    path: "/backups",
    name: "backups",
    component: () => import("./components/BackupsList"),
    meta: {
      requiresAuth: true, // Add meta field to indicate protected route
      mustBeAdmin: true
    }
  },
  {
    path: "/backups/:id",
    name: "backups-details",
    component: () => import("./components/Backup"),
    meta: {
      requiresAuth: true, // Add meta field to indicate protected route
      mustBeAdmin: true
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const token = sessionStorage.getItem("token");
    const isAdmin = sessionStorage.getItem("role")==="admin" ? true : false;
    if (token) {
      // User is authenticated, proceed to the route
      if(to.meta.mustBeAdmin && isAdmin) next();
      else if(to.meta.mustBeAdmin===false) next();
      else next('/dashboard');
    } else {
      // User is not authenticated, redirect to login
      next('/login');
    }
  } else {
    // Non-protected route, allow access
    next();
  }
});


export default router;
