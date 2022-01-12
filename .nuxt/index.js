import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_736f161a from 'nuxt_plugin_plugin_736f161a' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_plugin_df0827cc from 'nuxt_plugin_plugin_df0827cc' // Source: .\\vuetify\\plugin.js (mode: 'all')
import nuxt_plugin_workbox_375f09ce from 'nuxt_plugin_workbox_375f09ce' // Source: .\\workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_7d3f4699 from 'nuxt_plugin_metaplugin_7d3f4699' // Source: .\\pwa\\meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_fc3227e6 from 'nuxt_plugin_iconplugin_fc3227e6' // Source: .\\pwa\\icon.plugin.js (mode: 'all')
import nuxt_plugin_vuesweetalert2_4fdcda94 from 'nuxt_plugin_vuesweetalert2_4fdcda94' // Source: .\\vue-sweetalert2.js (mode: 'client')
import nuxt_plugin_axios_ec593d86 from 'nuxt_plugin_axios_ec593d86' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_firebase_34d6f55a from 'nuxt_plugin_firebase_34d6f55a' // Source: ..\\plugins\\firebase.js (mode: 'client')
import nuxt_plugin_fireauth_22211b23 from 'nuxt_plugin_fireauth_22211b23' // Source: ..\\plugins\\fireauth.js (mode: 'client')
import nuxt_plugin_dashboardplugins_120380b4 from 'nuxt_plugin_dashboardplugins_120380b4' // Source: ..\\plugins\\dashboard-plugins.js (mode: 'client')
import nuxt_plugin_vuelidate_4be431c8 from 'nuxt_plugin_vuelidate_4be431c8' // Source: ..\\plugins\\vuelidate.js (mode: 'client')
import nuxt_plugin_linkify_3d32042a from 'nuxt_plugin_linkify_3d32042a' // Source: ..\\plugins\\linkify.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    return this.$root.$options.$nuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"titleTemplate":"%s - Invoice Builder","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"description","hid":"description","content":"Invoice Builder, build interesting Invoices."}],"script":[{"type":"text\u002Fjavascript","src":"https:\u002F\u002Fmaps.googleapis.com\u002Fmaps\u002Fapi\u002Fjs?key=AIzaSyDtglyu-Rpd79oIKATLCn3XqA-2F49Kcj0&libraries=places"}],"link":[{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:100,300,400,500,700,900&display=swap"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@latest\u002Fcss\u002Fmaterialdesignicons.min.css"}],"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_736f161a === 'function') {
    await nuxt_plugin_plugin_736f161a(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_df0827cc === 'function') {
    await nuxt_plugin_plugin_df0827cc(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_375f09ce === 'function') {
    await nuxt_plugin_workbox_375f09ce(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_7d3f4699 === 'function') {
    await nuxt_plugin_metaplugin_7d3f4699(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_fc3227e6 === 'function') {
    await nuxt_plugin_iconplugin_fc3227e6(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuesweetalert2_4fdcda94 === 'function') {
    await nuxt_plugin_vuesweetalert2_4fdcda94(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_ec593d86 === 'function') {
    await nuxt_plugin_axios_ec593d86(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_firebase_34d6f55a === 'function') {
    await nuxt_plugin_firebase_34d6f55a(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_fireauth_22211b23 === 'function') {
    await nuxt_plugin_fireauth_22211b23(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_dashboardplugins_120380b4 === 'function') {
    await nuxt_plugin_dashboardplugins_120380b4(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuelidate_4be431c8 === 'function') {
    await nuxt_plugin_vuelidate_4be431c8(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_linkify_3d32042a === 'function') {
    await nuxt_plugin_linkify_3d32042a(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, (err) => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err)
        if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
