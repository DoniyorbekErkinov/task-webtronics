import { route } from "quasar/wrappers";
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function () {
  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createWebHistory(process.env.VUE_ROUTER_BASE),
  });
  Router.beforeEach((to, _, next) => {
    const isPublic = to.matched.some((record) => record.meta.public);
    const onlyWhenLoggedOut = to.matched.some(
      (record) => record.meta.onlyWhenLoggedOut
    );
    const loggedIn = !!localStorage.access;
    if (!loggedIn && !isPublic && to.name !== "Login") {
      return next({
        path: "/login",
      });
    }
    if (loggedIn && onlyWhenLoggedOut) {
      return next("/");
    }
    next();
  });

  return Router;
});
