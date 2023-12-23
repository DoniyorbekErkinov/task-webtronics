const routes = [
  {
    name: "Dashboard",
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    name: "Login",
    path: "/login",
    meta: {
      public: true,
      onlyWhenLoggedOut: true,
    },
    component: () => import("/src/pages/Auth/index.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
