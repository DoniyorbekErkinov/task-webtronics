const routes = [
  {
    name: "Dashboard",
    path: "/tickets",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/tickets/index.vue") },
      {
        name: "profile",
        path: "/profile",
        component: () => import("src/pages/profile/index.vue"),
      },
    ],
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
    redirect: "/tickets",
  },
];

export default routes;
