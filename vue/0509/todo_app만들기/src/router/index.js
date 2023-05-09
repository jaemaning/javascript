import Vue from 'vue'
import VueRouter from 'vue-router'
import AllTodoPage from '../views/AllTodoPage'
import ImportantTodoPage from '../views/ImportantTodoPage'
import TodayTodoPage from '../views/TodayTodoPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'all',
    component: AllTodoPage
  },
  // {
  //   path: '/today',
  //   name: 'today',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  {
    path: '/today',
    name: 'today',
    component: TodayTodoPage
  },
  {
    path: '/important',
    name: 'important',
    component: ImportantTodoPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
