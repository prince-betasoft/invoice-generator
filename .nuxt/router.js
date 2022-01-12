import Vue from "vue";
import Router from "vue-router";
import { normalizeURL, decode } from "ufo";
import { interopDefault } from "./utils";
import scrollBehavior from "./router.scrollBehavior.js";

const _20ecfd68 = () =>
  interopDefault(
    import("..\\pages\\login.vue" /* webpackChunkName: "pages/login" */)
  );
const _1e22f7e0 = () =>
  interopDefault(
    import("..\\pages\\register.vue" /* webpackChunkName: "pages/register" */)
  );
const _d4f8a444 = () =>
  interopDefault(
    import(
      "..\\pages\\profile\\all-invoices.vue" /* webpackChunkName: "pages/profile/all-invoices" */
    )
  );
const _0bb31d28 = () =>
  interopDefault(
    import(
      "..\\pages\\profile\\clients.vue" /* webpackChunkName: "pages/profile/clients" */
    )
  );
const _121cacf8 = () =>
  interopDefault(
    import(
      "..\\pages\\profile\\dashboard.vue" /* webpackChunkName: "pages/profile/dashboard" */
    )
  );
const _6d9b1964 = () =>
  interopDefault(
    import(
      "..\\pages\\profile\\new-invoice.vue" /* webpackChunkName: "pages/profile/new-invoice" */
    )
  );
const _e5dc7c22 = () =>
  interopDefault(
    import(
      "..\\pages\\profile\\settings.vue" /* webpackChunkName: "pages/profile/settings" */
    )
  );
const _c9eee038 = () =>
  interopDefault(
    import(
      "..\\pages\\profile\\client\\_clientId\\index.vue" /* webpackChunkName: "pages/profile/client/_clientId/index" */
    )
  );
const _25e1de35 = () =>
  interopDefault(
    import("..\\pages\\index.vue" /* webpackChunkName: "pages/index" */)
  );

const emptyFn = () => {};

Vue.use(Router);

export const routerOptions = {
  mode: "hiinvoice",
  base: "/",
  linkActiveClass: "nuxt-link-active",
  linkExactActiveClass: "nuxt-link-exact-active",
  scrollBehavior,

  routes: [
    {
      path: "/login",
      component: _20ecfd68,
      name: "login",
    },
    {
      path: "/register",
      component: _1e22f7e0,
      name: "register",
    },
    {
      path: "/profile/all-invoices",
      component: _d4f8a444,
      name: "profile-all-invoices",
    },
    {
      path: "/profile/clients",
      component: _0bb31d28,
      name: "profile-clients",
    },
    {
      path: "/profile/dashboard",
      component: _121cacf8,
      name: "profile-dashboard",
    },
    {
      path: "/profile/new-invoice",
      component: _6d9b1964,
      name: "profile-new-invoice",
    },
    {
      path: "/profile/settings",
      component: _e5dc7c22,
      name: "profile-settings",
    },
    {
      path: "/profile/client/:clientId",
      component: _c9eee038,
      name: "profile-client-clientId",
    },
    {
      path: "/",
      component: _25e1de35,
      name: "index",
    },
  ],

  fallback: false,
};

export function createRouter(ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base;
  const router = new Router({ ...routerOptions, base });

  // TODO: remove in Nuxt 3
  const originalPush = router.push;
  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);
  router.resolve = (to, current, append) => {
    if (typeof to === "string") {
      to = normalizeURL(to);
    }
    return resolve(to, current, append);
  };

  return router;
}
