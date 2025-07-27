import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _de290cde = () => interopDefault(import('../pages/appointment.vue' /* webpackChunkName: "pages/appointment" */))
const _e9fad2dc = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _71eed302 = () => interopDefault(import('../pages/liability.vue' /* webpackChunkName: "pages/liability" */))
const _72100f19 = () => interopDefault(import('../pages/new-client/index.vue' /* webpackChunkName: "pages/new-client/index" */))
const _273f1088 = () => interopDefault(import('../pages/terms-conditions.vue' /* webpackChunkName: "pages/terms-conditions" */))
const _a8cceb16 = () => interopDefault(import('../pages/new-client/restorative.vue' /* webpackChunkName: "pages/new-client/restorative" */))
const _668a3fc1 = () => interopDefault(import('../pages/timetable/term-3/index.vue' /* webpackChunkName: "pages/timetable/term-3/index" */))
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
    path: "/liability",
    component: _71eed302,
    name: "liability"
  }, {
    path: "/new-client",
    component: _72100f19,
    name: "new-client"
  }, {
    path: "/terms-conditions",
    component: _273f1088,
    name: "terms-conditions"
  }, {
    path: "/new-client/restorative",
    component: _a8cceb16,
    name: "new-client-restorative"
  }, {
    path: "/timetable/term-3",
    component: _668a3fc1,
    name: "timetable-term-3"
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
