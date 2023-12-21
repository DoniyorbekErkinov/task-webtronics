import { route } from "quasar/wrappers";
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import routes from "./routes";

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createWebHistory(process.env.VUE_ROUTER_BASE),
  });
  Router.beforeEach((to, _, next) => {
    const isAuth = !!localStorage.access;
    if (to.path !== "/login" && !isAuth) {
      next({ name: "Login" });
    } else if (to.meta.public && !!isAuth) {
      next({ name: "dashboard" });
    } else if (to.path === "" && isAuth) {
      next({ name: "dashboard" });
    } else {
      next();
    }
  });

  return Router;
});
