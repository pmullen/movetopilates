import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _de290cde = () => interopDefault(import('../pages/appointment.vue' /* webpackChunkName: "pages/appointment" */))
const _e9fad2dc = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _17633116 = () => interopDefault(import('../pages/new-client.vue' /* webpackChunkName: "pages/new-client" */))
const _273f1088 = () => interopDefault(import('../pages/terms-conditions.vue' /* webpackChunkName: "pages/terms-conditions" */))
const _7af720c4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/appointment",
    component: _de290cde,
    name: "appointment"
  }, {
    path: "/contact",
    component: _e9fad2dc,
    name: "contact"
  }, {
    path: "/new-client",
    component: _17633116,
    name: "new-client"
  }, {
    path: "/terms-conditions",
    component: _273f1088,
    name: "terms-conditions"
  }, {
    path: "/",
    component: _7af720c4,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
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
