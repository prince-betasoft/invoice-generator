import Vue from 'vue'
import { isSamePath as _isSamePath, joinURL, normalizeURL, withQuery, withoutTrailingSlash } from 'ufo'

// window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)
if (process.client) {
  window.onNuxtReadyCbs = []
  window.onNuxtReady = (cb) => {
    window.onNuxtReadyCbs.push(cb)
  }
}

export function createGetCounter (counterObject, defaultKey = '') {
  return function getCounter (id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0
    }
    return counterObject[id]++
  }
}

export function empty () {}

export function globalHandleError (error) {
  if (Vue.config.errorHandler) {
    Vue.config.errorHandler(error)
  }
}

export function interopDefault (promise) {
  return promise.then(m => m.default || m)
}

export function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length
}
export function purifyData(data) {
  if (process.env.NODE_ENV === 'production') {
    return data
  }

  return Object.entries(data).filter(
    ([key, value]) => {
      const valid = !(value instanceof Function) && !(value instanceof Promise)
      if (!valid) {
        console.warn(`${key} is not able to be stringified. This will break in a production environment.`)
      }
      return valid
    }
    ).reduce((obj, [key, value]) => {
      obj[key] = value
      return obj
    }, {})
}
export function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || []
  for (const child of children) {
    if (child.$fetch) {
      instances.push(child)
      continue; // Don't get the children since it will reload the template
    }
    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances)
    }
  }
  return instances
}

export function applyAsyncData (Component, asyncData) {
  if (
    // For SSR, we once all this function without second param to just apply asyncData
    // Prevent doing this for each SSR request
    !asyncData && Component.options.__hasNuxtData
  ) {
    return
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () { return {} }
  Component.options._originDataFn = ComponentData

  Component.options.data = function () {
    const data = ComponentData.call(this, this)
    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid]
    }
    return { ...data, ...asyncData }
  }

  Component.options.__hasNuxtData = true

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data
  }
}

export function sanitizeComponent (Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component
  }
  if (!Component.options) {
    Component = Vue.extend(Component) // fix issue #6
    Component._Ctor = Component
  } else {
    Component._Ctor = Component
    Component.extendOptions = Component.options
  }
  // If no component name defined, set file path as name, (also fixes #5703)
  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file
  }
  return Component
}

export function getMatchedComponents (route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map((key) => {
      matches && matches.push(index)
      return m[prop][key]
    })
  }))
}

export function getMatchedComponentsInstances (route, matches = false) {
  return getMatchedComponents(route, matches, 'instances')
}

export function flatMapComponents (route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index))
      } else {
        delete m.components[key]
      }
      return promises
    }, [])
  }))
}

export function resolveRouteComponents (route, fn) {
  return Promise.all(
    flatMapComponents(route, async (Component, instance, match, key) => {
      // If component is a function, resolve it
      if (typeof Component === 'function' && !Component.options) {
        Component = await Component()
      }
      match.components[key] = Component = sanitizeComponent(Component)
      return typeof fn === 'function' ? fn(Component, instance, match, key) : Component
    })
  )
}

export async function getRouteData (route) {
  if (!route) {
    return
  }
  // Make sure the components are resolved (code-splitting)
  await resolveRouteComponents(route)
  // Send back a copy of route with meta based on Component definition
  return {
    ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta, ...(route.matched[index] || {}).meta }
    })
  }
}

export async function setContext (app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: process.static,
      isDev: true,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {"firebaseApiKey":"AIzaSyB2AM6H0gxlReWA9xNdRJbWhC-396S8keA","firebaseAuthDomain":"test-mode-b30.firebaseapp.com","firebaseProjectId":"test-mode-b30","firebaseStorageBucket":"test-mode-b30.appspot.com","firebaseMessagingSenderId":"623784780196","firebaseAppId":"1:623784780196:web:23d5657f4a0ac874f7a131","firebaseMeasurementId":"G-ZZ6K87BB6Z","ACLOCAL_PATH":"C:\\Program Files\\Git\\mingw64\\share\\aclocal;C:\\Program Files\\Git\\usr\\share\\aclocal","ALLUSERSPROFILE":"C:\\ProgramData","APPDATA":"C:\\Users\\Betasoft\\AppData\\Roaming","APPLICATION_INSIGHTS_NO_DIAGNOSTIC_CHANNEL":"true","ChocolateyInstall":"C:\\ProgramData\\chocolatey","ChocolateyLastPathUpdate":"132591453091826553","CHROME_CRASHPAD_PIPE_NAME":"\\\\.\\pipe\\crashpad_6496_YAVQLBQBKFXJGMKA","COLORTERM":"truecolor","COMMONPROGRAMFILES":"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files","CommonProgramW6432":"C:\\Program Files\\Common Files","COMPUTERNAME":"DESKTOP-T653BE1","COMSPEC":"C:\\Windows\\system32\\cmd.exe","CONFIG_SITE":"C:/Program Files/Git/mingw64/etc/config.site","DISPLAY":"needs-to-be-defined","dp0":"D:\\Invoice-Builder\\node_modules\\.bin\\","DriverData":"C:\\Windows\\System32\\Drivers\\DriverData","EXEPATH":"C:\\Program Files\\Git","GIT_ASKPASS":"c:\\Users\\Betasoft\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh","HOME":"C:\\Users\\Betasoft","HOMEDRIVE":"C:","HOMEPATH":"\\Users\\Betasoft","HOSTNAME":"DESKTOP-T653BE1","INFOPATH":"C:\\Program Files\\Git\\usr\\local\\info;C:\\Program Files\\Git\\usr\\share\\info;C:\\Program Files\\Git\\usr\\info;C:\\Program Files\\Git\\share\\info","INIT_CWD":"D:\\Invoice-Builder","LANG":"en_US.UTF-8","LC_CTYPE":"en_US.UTF-8","LOCALAPPDATA":"C:\\Users\\Betasoft\\AppData\\Local","LOGONSERVER":"\\\\DESKTOP-T653BE1","MANPATH":"C:\\Program Files\\Git\\mingw64\\local\\man;C:\\Program Files\\Git\\mingw64\\share\\man;C:\\Program Files\\Git\\usr\\local\\man;C:\\Program Files\\Git\\usr\\share\\man;C:\\Program Files\\Git\\usr\\man;C:\\Program Files\\Git\\share\\man","MINGW_CHOST":"x86_64-w64-mingw32","MINGW_PACKAGE_PREFIX":"mingw-w64-x86_64","MINGW_PREFIX":"C:/Program Files/Git/mingw64","MSYSTEM":"MINGW64","MSYSTEM_CARCH":"x86_64","MSYSTEM_CHOST":"x86_64-w64-mingw32","MSYSTEM_PREFIX":"C:/Program Files/Git/mingw64","NODE":"C:\\Program Files\\nodejs\\node.exe","NODE_ENV":"development","NODE_EXE":"C:\\Program Files\\nodejs\\\\node.exe","NPM_CLI_JS":"C:\\Program Files\\nodejs\\\\node_modules\\npm\\bin\\npm-cli.js","npm_config_access":"","npm_config_allow_same_version":"","npm_config_also":"","npm_config_always_auth":"","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"dev\"],\"original\":[\"run\",\"dev\"]}","npm_config_audit":"true","npm_config_audit_level":"low","npm_config_auth_type":"legacy","npm_config_before":"","npm_config_bin_links":"true","npm_config_browser":"","npm_config_ca":"","npm_config_cache":"C:\\Users\\Betasoft\\AppData\\Roaming\\npm-cache","npm_config_cache_lock_retries":"10","npm_config_cache_lock_stale":"60000","npm_config_cache_lock_wait":"10000","npm_config_cache_max":"Infinity","npm_config_cache_min":"10","npm_config_cafile":"","npm_config_cert":"","npm_config_cidr":"","npm_config_color":"true","npm_config_commit_hooks":"true","npm_config_depth":"Infinity","npm_config_description":"true","npm_config_dev":"","npm_config_dry_run":"","npm_config_editor":"notepad.exe","npm_config_engine_strict":"","npm_config_fetch_retries":"2","npm_config_fetch_retry_factor":"10","npm_config_fetch_retry_maxtimeout":"60000","npm_config_fetch_retry_mintimeout":"10000","npm_config_force":"","npm_config_format_package_lock":"true","npm_config_fund":"true","npm_config_git":"git","npm_config_git_tag_version":"true","npm_config_global":"","npm_config_globalconfig":"C:\\Users\\Betasoft\\AppData\\Roaming\\npm\\etc\\npmrc","npm_config_globalignorefile":"C:\\Users\\Betasoft\\AppData\\Roaming\\npm\\etc\\npmignore","npm_config_global_style":"","npm_config_group":"","npm_config_ham_it_up":"","npm_config_heading":"npm","npm_config_https_proxy":"","npm_config_if_present":"","npm_config_ignore_prepublish":"","npm_config_ignore_scripts":"","npm_config_init_author_email":"","npm_config_init_author_name":"","npm_config_init_author_url":"","npm_config_init_license":"ISC","npm_config_init_module":"C:\\Users\\Betasoft\\.npm-init.js","npm_config_init_version":"1.0.0","npm_config_json":"","npm_config_key":"","npm_config_legacy_bundling":"","npm_config_link":"","npm_config_local_address":"","npm_config_loglevel":"notice","npm_config_logs_max":"10","npm_config_long":"","npm_config_maxsockets":"50","npm_config_message":"%s","npm_config_metrics_registry":"https://registry.npmjs.org/","npm_config_node_gyp":"C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js","npm_config_node_options":"","npm_config_node_version":"14.16.0","npm_config_noproxy":"","npm_config_offline":"","npm_config_onload_script":"","npm_config_only":"","npm_config_optional":"true","npm_config_otp":"","npm_config_package_lock":"true","npm_config_package_lock_only":"","npm_config_parseable":"","npm_config_prefer_offline":"","npm_config_prefer_online":"","npm_config_prefix":"C:\\Users\\Betasoft\\AppData\\Roaming\\npm","npm_config_preid":"","npm_config_production":"","npm_config_progress":"true","npm_config_proxy":"","npm_config_read_only":"","npm_config_rebuild_bundle":"true","npm_config_registry":"https://registry.npmjs.org/","npm_config_rollback":"true","npm_config_save":"true","npm_config_save_bundle":"","npm_config_save_dev":"","npm_config_save_exact":"","npm_config_save_optional":"","npm_config_save_prefix":"^","npm_config_save_prod":"","npm_config_scope":"","npm_config_scripts_prepend_node_path":"warn-only","npm_config_script_shell":"","npm_config_searchexclude":"","npm_config_searchlimit":"20","npm_config_searchopts":"","npm_config_searchstaleness":"900","npm_config_send_metrics":"","npm_config_shell":"C:\\Windows\\system32\\cmd.exe","npm_config_shrinkwrap":"true","npm_config_sign_git_commit":"","npm_config_sign_git_tag":"","npm_config_sso_poll_frequency":"500","npm_config_sso_type":"oauth","npm_config_strict_ssl":"true","npm_config_tag":"latest","npm_config_tag_version_prefix":"v","npm_config_timing":"","npm_config_tmp":"C:\\Users\\Betasoft\\AppData\\Local\\Temp","npm_config_umask":"0000","npm_config_unicode":"","npm_config_unsafe_perm":"true","npm_config_update_notifier":"true","npm_config_usage":"","npm_config_user":"","npm_config_userconfig":"C:\\Users\\Betasoft\\.npmrc","npm_config_user_agent":"npm/6.14.11 node/v14.16.0 win32 x64","npm_config_version":"","npm_config_versions":"","npm_config_viewer":"browser","npm_execpath":"C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js","npm_lifecycle_event":"dev","npm_lifecycle_script":"nuxt","npm_node_execpath":"C:\\Program Files\\nodejs\\node.exe","npm_package_dependencies_cookieparser":"^0.1.0","npm_package_dependencies_core_js":"^3.9.1","npm_package_dependencies_js_cookie":"^2.2.1","npm_package_dependencies_jwt_decode":"^3.1.2","npm_package_dependencies_link_prevue":"^1.2.0","npm_package_dependencies_nuxt":"^2.15.3","npm_package_dependencies_nuxt_seo":"^1.5.0","npm_package_dependencies_slugify":"^1.5.0","npm_package_dependencies_vee_validate":"^3.4.5","npm_package_dependencies_vuelidate":"^0.7.6","npm_package_dependencies_vuex_easy_firestore":"^1.36.0","npm_package_dependencies_vue_client_only":"^2.0.0","npm_package_dependencies_vue_ctk_date_time_picker":"^2.4.0","npm_package_dependencies_vue_lazyload":"^1.3.3","npm_package_dependencies_vue_moment":"^4.1.0","npm_package_dependencies_vue_sweetalert2":"^4.2.1","npm_package_dependencies__nuxtjs_axios":"^5.13.1","npm_package_dependencies__nuxtjs_dotenv":"^1.4.1","npm_package_dependencies__nuxtjs_pwa":"^3.3.5","npm_package_description":"## Build Setup","npm_package_devDependencies_babel_core":"7.0.0-bridge.0","npm_package_devDependencies_babel_jest":"^26.6.3","npm_package_devDependencies_cross_env":"^7.0.3","npm_package_devDependencies_eslint_config_prettier":"^8.1.0","npm_package_devDependencies_eslint_plugin_prettier":"^3.3.1","npm_package_devDependencies_firebase":"^8.4.1","npm_package_devDependencies_jest":"^26.6.3","npm_package_devDependencies_prettier":"^2.2.1","npm_package_devDependencies_ts_jest":"^26.5.4","npm_package_devDependencies_vue_jest":"^3.0.4","npm_package_devDependencies__nuxtjs_vuetify":"^1.11.3","npm_package_devDependencies__nuxt_types":"^2.15.3","npm_package_devDependencies__nuxt_typescript_build":"^2.1.0","npm_package_devDependencies__vue_test_utils":"^1.1.3","npm_package_gitHead":"cb6a0f82623bc118db987f5efa203f210f4da7ef","npm_package_name":"invoice-builder","npm_package_private":"true","npm_package_readmeFilename":"README.md","npm_package_scripts_build":"nuxt build","npm_package_scripts_build_spa":"nuxt build && nuxt generate","npm_package_scripts_dev":"nuxt","npm_package_scripts_generate":"nuxt generate","npm_package_scripts_start":"nuxt start","npm_package_scripts_test":"jest","npm_package_version":"1.0.0","NPM_PREFIX_NPM_CLI_JS":"C:\\Users\\Betasoft\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js","NUMBER_OF_PROCESSORS":"4","OneDrive":"C:\\Users\\Betasoft\\OneDrive","OneDriveConsumer":"C:\\Users\\Betasoft\\OneDrive","ORIGINAL_PATH":"C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\Betasoft\\bin;C:\\Python39\\Scripts;C:\\Python39;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\xampp\\php;C:\\ProgramData\\ComposerSetup\\bin;C:\\Program Files\\nodejs;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Git\\cmd;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\Betasoft\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Betasoft\\AppData\\Roaming\\Composer\\vendor\\bin;C:\\Users\\Betasoft\\AppData\\Roaming\\npm;C:\\Users\\Betasoft\\AppData\\Local\\Programs\\Microsoft VS Code\\bin","ORIGINAL_TEMP":"C:/Users/Betasoft/AppData/Local/Temp","ORIGINAL_TMP":"C:/Users/Betasoft/AppData/Local/Temp","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","OS":"Windows_NT","PATH":"C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\npm-lifecycle\\node-gyp-bin;D:\\Invoice-Builder\\node_modules\\.bin;C:\\Users\\Betasoft\\bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\local\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\Betasoft\\bin;C:\\Python39\\Scripts;C:\\Python39;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\xampp\\php;C:\\ProgramData\\ComposerSetup\\bin;C:\\Program Files\\nodejs;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Git\\cmd;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\Betasoft\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Betasoft\\AppData\\Roaming\\Composer\\vendor\\bin;C:\\Users\\Betasoft\\AppData\\Roaming\\npm;C:\\Users\\Betasoft\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Program Files\\Git\\usr\\bin\\vendor_perl;C:\\Program Files\\Git\\usr\\bin\\core_perl","Path":"C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\npm-lifecycle\\node-gyp-bin;D:\\Invoice-Builder\\node_modules\\.bin;C:\\Users\\Betasoft\\bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\local\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\Betasoft\\bin;C:\\Python39\\Scripts;C:\\Python39;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\xampp\\php;C:\\ProgramData\\ComposerSetup\\bin;C:\\Program Files\\nodejs;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Git\\cmd;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\Betasoft\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Betasoft\\AppData\\Roaming\\Composer\\vendor\\bin;C:\\Users\\Betasoft\\AppData\\Roaming\\npm;C:\\Users\\Betasoft\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Program Files\\Git\\usr\\bin\\vendor_perl;C:\\Program Files\\Git\\usr\\bin\\core_perl","PATHEXT":".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC;.PY;.PYW;.CPL","PKG_CONFIG_PATH":"C:\\Program Files\\Git\\mingw64\\lib\\pkgconfig;C:\\Program Files\\Git\\mingw64\\share\\pkgconfig","PLINK_PROTOCOL":"ssh","PROCESSOR_ARCHITECTURE":"AMD64","PROCESSOR_IDENTIFIER":"Intel64 Family 6 Model 158 Stepping 11, GenuineIntel","PROCESSOR_LEVEL":"6","PROCESSOR_REVISION":"9e0b","ProgramData":"C:\\ProgramData","PROGRAMFILES":"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)","ProgramW6432":"C:\\Program Files","PROMPT":"$P$G","PSModulePath":"C:\\Users\\Betasoft\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules","PUBLIC":"C:\\Users\\Public","PWD":"D:/Invoice-Builder","SESSIONNAME":"Console","SHELL":"C:\\Program Files\\Git\\usr\\bin\\bash.exe","SHLVL":"2","SSH_ASKPASS":"C:/Program Files/Git/mingw64/libexec/git-core/git-gui--askpass","SYSTEMDRIVE":"C:","SYSTEMROOT":"C:\\Windows","TEMP":"C:\\Users\\Betasoft\\AppData\\Local\\Temp","TERM":"xterm","TERM_PROGRAM":"vscode","TERM_PROGRAM_VERSION":"1.63.2","TMP":"C:\\Users\\Betasoft\\AppData\\Local\\Temp","TMPDIR":"C:\\Users\\Betasoft\\AppData\\Local\\Temp","USERDOMAIN":"DESKTOP-T653BE1","USERDOMAIN_ROAMINGPROFILE":"DESKTOP-T653BE1","USERNAME":"Betasoft","USERPROFILE":"C:\\Users\\Betasoft","VSCODE_GIT_ASKPASS_EXTRA_ARGS":"--ms-enable-electron-run-as-node","VSCODE_GIT_ASKPASS_MAIN":"c:\\Users\\Betasoft\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js","VSCODE_GIT_ASKPASS_NODE":"C:\\Users\\Betasoft\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe","VSCODE_GIT_IPC_HANDLE":"\\\\.\\pipe\\vscode-git-66d6a9b103-sock","VUE_ENV":"server","WINDIR":"C:\\Windows","_":"C:/Users/Betasoft/AppData/Local/Programs/Microsoft VS Code/Code.exe","_applied":"true","_AXIOS_BASE_URL_":"http://localhost:3000/","_prog":"node"}
    }
    // Only set once

    if (context.req) {
      app.context.req = context.req
    }
    if (context.res) {
      app.context.res = context.res
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext
    }
    app.context.redirect = (status, path, query) => {
      if (!status) {
        return
      }
      app.context._redirected = true
      // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
      let pathType = typeof path
      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {}
        path = status
        pathType = typeof path
        status = 302
      }
      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath
      }
      // "/absolute/route", "./relative/route" or "../relative/route"
      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        })
      } else {
        path = withQuery(path, query)
        if (process.server) {
          app.context.next({
            path,
            status
          })
        }
        if (process.client) {
          // https://developer.mozilla.org/en-US/docs/Web/API/Location/replace
          window.location.replace(path)

          // Throw a redirect error
          throw new Error('ERR_REDIRECT')
        }
      }
    }
    if (process.server) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn)
    }
    if (process.client) {
      app.context.nuxtState = window.__NUXT__
    }
  }

  // Dynamic keys
  const [currentRouteData, fromRouteData] = await Promise.all([
    getRouteData(context.route),
    getRouteData(context.from)
  ])

  if (context.route) {
    app.context.route = currentRouteData
  }

  if (context.from) {
    app.context.from = fromRouteData
  }

  app.context.next = context.next
  app.context._redirected = false
  app.context._errored = false
  app.context.isHMR = Boolean(context.isHMR)
  app.context.params = app.context.route.params || {}
  app.context.query = app.context.route.query || {}
}

export function middlewareSeries (promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve()
  }
  return promisify(promises[0], appContext)
    .then(() => {
      return middlewareSeries(promises.slice(1), appContext)
    })
}

export function promisify (fn, context) {
  let promise
  if (fn.length === 2) {
      console.warn('Callback-based asyncData, fetch or middleware calls are deprecated. ' +
        'Please switch to promises or async/await syntax')

    // fn(context, callback)
    promise = new Promise((resolve) => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err)
        }
        data = data || {}
        resolve(data)
      })
    })
  } else {
    promise = fn(context)
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise
  }
  return Promise.resolve(promise)
}

// Imported from vue-router
export function getLocation (base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '')
  }

  base = decodeURI(base).slice(0, -1) // consideration is base is normalized with trailing slash
  let path = decodeURI(window.location.pathname)

  if (base && path.startsWith(base)) {
    path = path.slice(base.length)
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash

  return normalizeURL(fullPath)
}

// Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
export function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

export function getQueryDiff (toQuery, fromQuery) {
  const diff = {}
  const queries = { ...toQuery, ...fromQuery }
  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true
    }
  }
  return diff
}

export function normalizeError (err) {
  let message
  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2)
    } catch (e) {
      message = `[${err.constructor.name}]`
    }
  } else {
    message = err.message || err
  }
  return {
    ...err,
    message,
    statusCode: (err.statusCode || err.status || (err.response && err.response.status) || 500)
  }
}

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
const PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  const tokens = []
  let key = 0
  let index = 0
  let path = ''
  const defaultDelimiter = (options && options.delimiter) || '/'
  let res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0]
    const escaped = res[1]
    const offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    const next = str[index]
    const prefix = res[2]
    const name = res[3]
    const capture = res[4]
    const group = res[5]
    const modifier = res[6]
    const asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    const partial = prefix != null && next != null && next !== prefix
    const repeat = modifier === '+' || modifier === '*'
    const optional = modifier === '?' || modifier === '*'
    const delimiter = res[2] || defaultDelimiter
    const pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g
  return encodeURI(str).replace(re, (c) => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURIComponentPretty(str, true)
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$/()])/g, '\\$1')
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options))
    }
  }

  return function (obj, opts) {
    let path = ''
    const data = obj || {}
    const options = opts || {}
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      const value = data[token.name || 'pathMatch']
      let segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

export function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = []
  }
  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn)
  }
}

export const urlJoin = joinURL

export const stripTrailingSlash = withoutTrailingSlash

export const isSamePath = _isSamePath

export function setScrollRestoration (newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch(e) {}
}
