import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6afb97a6 = () => interopDefault(import('../pages/appointment.vue' /* webpackChunkName: "pages/appointment" */))
const _471201a4 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _e5f56fca = () => interopDefault(import('../pages/liability.vue' /* webpackChunkName: "pages/liability" */))
const _35d195fd = () => interopDefault(import('../pages/new-client/index.vue' /* webpackChunkName: "pages/new-client/index" */))
const _36e637d4 = () => interopDefault(import('../pages/pricing.vue' /* webpackChunkName: "pages/pricing" */))
const _9fbc02c0 = () => interopDefault(import('../pages/terms-conditions.vue' /* webpackChunkName: "pages/terms-conditions" */))
const _0a2e951c = () => interopDefault(import('../pages/timetable/index.vue' /* webpackChunkName: "pages/timetable/index" */))
const _7aab5659 = () => interopDefault(import('../pages/new-client/restorative.vue' /* webpackChunkName: "pages/new-client/restorative" */))
const _359c0ba5 = () => interopDefault(import('../pages/timetable/term-3/index.vue' /* webpackChunkName: "pages/timetable/term-3/index" */))
const _70650060 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _6afb97a6,
    name: "appointment"
  }, {
    path: "/contact",
    component: _471201a4,
    name: "contact"
  }, {
    path: "/liability",
    component: _e5f56fca,
    name: "liability"
  }, {
    path: "/new-client",
    component: _35d195fd,
    name: "new-client"
  }, {
    path: "/pricing",
    component: _36e637d4,
    name: "pricing"
  }, {
    path: "/terms-conditions",
    component: _9fbc02c0,
    name: "terms-conditions"
  }, {
    path: "/timetable",
    component: _0a2e951c,
    name: "timetable"
  }, {
    path: "/new-client/restorative",
    component: _7aab5659,
    name: "new-client-restorative"
  }, {
    path: "/timetable/term-3",
    component: _359c0ba5,
    name: "timetable-term-3"
  }, {
    path: "/",
    component: _70650060,
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
