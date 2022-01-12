import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _20ecfd68 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _1e22f7e0 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _023fb274 = () => interopDefault(import('..\\pages\\admin\\clients.vue' /* webpackChunkName: "pages/admin/clients" */))
const _56646d2a = () => interopDefault(import('..\\pages\\admin\\invoice.vue' /* webpackChunkName: "pages/admin/invoice" */))
const _1115259f = () => interopDefault(import('..\\pages\\admin\\newInvoice.vue' /* webpackChunkName: "pages/admin/newInvoice" */))
const _b8513b96 = () => interopDefault(import('..\\pages\\admin\\userDetails.vue' /* webpackChunkName: "pages/admin/userDetails" */))
const _25e1de35 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/login",
    component: _20ecfd68,
    name: "login"
  }, {
    path: "/register",
    component: _1e22f7e0,
    name: "register"
  }, {
    path: "/admin/clients",
    component: _023fb274,
    name: "admin-clients"
  }, {
    path: "/admin/invoice",
    component: _56646d2a,
    name: "admin-invoice"
  }, {
    path: "/admin/newInvoice",
    component: _1115259f,
    name: "admin-newInvoice"
  }, {
    path: "/admin/userDetails",
    component: _b8513b96,
    name: "admin-userDetails"
  }, {
    path: "/",
    component: _25e1de35,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
