import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HappeedView from '../views/Happeed.vue'
import NotFound404 from '../views/NotFound404'
import SsaflingView from '../views/Ssafling'
import SsafleafView from '../views/Ssafleaf'
import SsaflowerView from '../views/Ssaflower'

Vue.use(VueRouter)

const routes = [
  {
    path: '/404',
    name: '404',
    component: NotFound404
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/happeed',
    name: 'happeed',
    component: HappeedView,
    beforeEnter: (to, from, next) => {
      if (['ssafling', 'ssafleaf', 'ssaflower'].includes(from.name)) {
        next({ name: "ssafling" })
      } else {
        console.log('to',to.name)
        console.log('from',from.name)
        next()
      }
    }
  },
  {
    path: '/ssafling',
    name: 'ssafling',
    component: SsaflingView,
    beforeEnter: (to, from, next) => {
      if (['ssafleaf','ssaflower'].includes(from.name)) {
        next({ name: "ssafleaf" })
      } else {
        console.log('to',to.name)
        console.log('from',from.name)
        next()
      }
    }
  },
  {
    path: '/ssafleaf',
    name: 'ssafleaf',
    component: SsafleafView,
    beforeEnter: (to, from, next) => {
      if (from.name === 'ssaflower') {
        next({ name: "ssaflower" })
      } else {
        console.log('to',to.name)
        console.log('from',from.name)
        next()
      }
    }
  },
  {
    path: '/ssaflower',
    name: 'ssaflower',
    component: SsaflowerView
  },
  {
    path: "*",
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
